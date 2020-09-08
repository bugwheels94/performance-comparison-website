package model

import "go.mongodb.org/mongo-driver/bson/primitive"

// RecordingPages Schema
type RecordingPages struct {
	ID        primitive.ObjectID `json:"_id" bson:"_id"`
	URL       string
	ProjectID primitive.ObjectID
}
