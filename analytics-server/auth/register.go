package auth

import (
	"analytics/model"
	"analytics/utils"
	"context"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/avct/uasurfer"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type details struct {
	Screen string `json:"screen"`
}

var jwtKey = []byte("my_secret_key")

func createToken(userID string) (string, error) {
	claims := jwt.MapClaims{}
	claims["authorized"] = true
	claims["id"] = userID
	claims["exp"] = time.Now().Add(time.Hour * 1000).Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtKey)
}

// BrowserAuth func
// func browserAuth(c *gin.Context) {
// 	cookie, err := c.Cookie("jwt")
// 	if err == nil {
// 		token, _ := jwt.Parse(cookie, func(token *jwt.Token) (interface{}, error) {
// 			// Don't forget to validate the alg is what you expect:
// 			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
// 				return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
// 			}
// 			// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
// 			return jwtKey, nil
// 		})
// 		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
// 			c.Set("browserid", claims["id"].(string))
// 		}
// 	}
// }
func browserAuth(c *gin.Context) {
	token := c.GetHeader("Authorization")
	tokenWithTitle := strings.Split(token, "Bearer")
	if len(tokenWithTitle) != 2 {
		return
	}
	token = strings.TrimSpace(tokenWithTitle[1])
	parsedToken, _ := jwt.Parse(token, func(parsedToken *jwt.Token) (interface{}, error) {
		if _, ok := parsedToken.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", parsedToken.Header["alg"])
		}
		return jwtKey, nil
	})
	if claims, ok := parsedToken.Claims.(jwt.MapClaims); ok && parsedToken.Valid {
		c.Set("browserid", claims["id"].(string))
	}
}

// IfBrowserAuth hello
func IfBrowserAuth(c *gin.Context) {
	browserAuth(c)
	_, exists := c.Get("browserid")
	if !exists {
		c.AbortWithStatus(401)
	}
}

// IfBrowserNotAuth hello
func IfBrowserNotAuth(c *gin.Context) {
	browserAuth(c)
	_, exists := c.Get("browserid")
	if exists {
		c.AbortWithStatus(200)
	}
}

func recordingTrackAuth(c *gin.Context) {
	token := c.GetHeader("Authorization")
	tokenWithTitle := strings.Split(token, "Bearer")
	if len(tokenWithTitle) != 2 {
		return
	}
	token = strings.TrimSpace(tokenWithTitle[1])
	parsedToken, _ := jwt.Parse(token, func(parsedToken *jwt.Token) (interface{}, error) {
		if _, ok := parsedToken.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", parsedToken.Header["alg"])
		}
		return jwtKey, nil
	})
	if claims, ok := parsedToken.Claims.(jwt.MapClaims); ok && parsedToken.Valid {
		c.Set("trackid", claims["id"].(string))
	}
}

// IfRecordingTrackAuth hello
func IfRecordingTrackAuth(c *gin.Context) {
	recordingTrackAuth(c)
	_, exists := c.Get("trackid")
	if !exists {
		c.AbortWithStatus(401)
	}
}

// IfRecordingTrackNotAuth hello
func IfRecordingTrackNotAuth(c *gin.Context) {
	recordingTrackAuth(c)
	_, exists := c.Get("trackid")
	if exists {
		c.AbortWithStatus(200)
	}
}

// RegisterBrowser hello
func RegisterBrowser(c *gin.Context) {
	var Details details
	err := c.BindJSON(&Details)
	if err != nil {
		c.String(http.StatusBadRequest, "NO")
		return
	}
	agent := c.GetHeader("User-Agent")
	uaString := uasurfer.Parse(agent)
	println((uaString))
	db := utils.GetMongoDatastore()
	browserResult, err := db.Collection("browser").
		InsertOne(
			context.TODO(),
			model.Browser{
				strings.ToLower(uaString.OS.Name.String()),
				strings.ToLower(uaString.Browser.Name.String()),
				Details.Screen,
				make([]int, 0),
			},
		)
	if err != nil {
		log.Fatal(err)
	}
	if oid, ok := browserResult.InsertedID.(primitive.ObjectID); ok {
		v, err := createToken(oid.Hex())
		if err != nil {
			log.Fatal(err)
			return
		}
		// c.SetSameSite(http.SameSiteNoneMode)
		// c.SetCookie("jwt", v, 1000*3600, "/", "", true, true)
		c.String(http.StatusOK, v)
		return
	}
	c.String(http.StatusInternalServerError, "Oops")
}

// RegisterRecording hello
func RegisterRecording(c *gin.Context) {
	project := c.Param("project")
	url := c.GetHeader("Referer")
	browserID, _ := c.Get("browserid")
	db := utils.GetMongoDatastore()
	projectID, _ := primitive.ObjectIDFromHex(project)
	if projectID.IsZero() {
		c.String(http.StatusBadRequest, "Invalid ProjectID")
		return
	}
	var result model.RecordingPages
	t := bson.M{"projectid": projectID, "url": url}
	err := db.Collection("recording_page").
		FindOneAndUpdate(
			context.TODO(),
			t,
			bson.M{"$setOnInsert": t},
			options.
				FindOneAndUpdate().
				SetUpsert(true).
				SetReturnDocument(1)).Decode(&result)
	if err != nil {
		log.Fatal(err)
	}
	bID, _ := primitive.ObjectIDFromHex(browserID.(string))
	trackResult, err := db.Collection("recording_track").
		InsertOne(
			context.TODO(),
			model.RecordingTrackSchema{
				make([]string, 0),
			},
		)
	if err != nil {
		log.Fatal(err)
	}
	_, err = db.Collection("browser").
		UpdateOne(
			context.TODO(),
			bson.M{"_id": bID},
			bson.M{
				"$push": bson.M{
					"recordings": bson.M{
						"recording_id": result.ID,
						"track_id":     trackResult.InsertedID,
					},
				},
			},
		)
	if err != nil {
		c.String(http.StatusInternalServerError, "NO")
		return
	}
	if oid, ok := trackResult.InsertedID.(primitive.ObjectID); ok {
		v, err := createToken(oid.Hex())
		if err != nil {
			log.Fatal(err)
			return
		}
		c.String(http.StatusOK, v)
		return
	}
	c.String(http.StatusInternalServerError, "Oops")

}
