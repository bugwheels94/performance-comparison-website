package routes

import (
	"analytics/utils"
	"context"
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/gin-gonic/gin"
)

type details struct {
	Data string `json:"data"`
}

//InsertTrackData hello
func InsertTrackData(c *gin.Context) {
	var Details details
	err := c.BindJSON(&Details)
	fmt.Println(Details)
	if err != nil {
		c.String(http.StatusBadRequest, "NO")
		return
	}
	tID, _ := c.Get("trackid")
	db := utils.GetMongoDatastore()
	trackID, _ := primitive.ObjectIDFromHex(tID.(string))

	_, err = db.Collection("recording_track").
		UpdateOne(
			context.TODO(),
			bson.M{"_id": trackID},
			bson.M{"$push": bson.M{"data": Details.Data}},
		)
	if err != nil {
		c.String(http.StatusInternalServerError, "NO")
		return
	}
	c.String(http.StatusOK, "OK")
}
