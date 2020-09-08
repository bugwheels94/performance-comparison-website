package utils

import (
	"context"
	"fmt"
	"log"
	"os"
	"reflect"
	"sync"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoDatastore struct {
	db      *mongo.Database
	Session *mongo.Client
}

var singleton MongoDatastore
var once sync.Once

func GetMongoDatastore() *mongo.Database {
	once.Do(func() {
		client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://mongo:27017"))
		err = client.Connect(context.TODO())
		if err != nil {
			log.Fatal(err)
		}
		db := client.Database("survey")
		singleton = MongoDatastore{Session: client, db: db}
		fmt.Println("Connected to MongoDB!")
		createIndex(db, mongo.IndexModel{
			Keys: bson.M{
				"projectid": 1, // index in ascending order
				"url":       1, // index in ascending order
			}, Options: options.Index().SetUnique(true),
		})
	})
	return singleton.db
}
func createIndex(db *mongo.Database, indexModel mongo.IndexModel) {
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)
	mod := indexModel
	ind, err := db.Collection("recording_page").Indexes().CreateOne(ctx, mod)
	if err != nil {
		var merr mongo.WriteException
		merr = err.(mongo.WriteException)
		errCode := merr.WriteErrors[0].Code
		fmt.Println(errCode)
		fmt.Println("Indexes().CreateOne() ERROR:", err)
		os.Exit(1) // exit in case of error
	} else {
		// API call returns string of the index name
		fmt.Println("CreateOne() index:", ind)
		fmt.Println("CreateOne() type:", reflect.TypeOf(ind), "\n")
	}
}
