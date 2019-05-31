package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

/*Image is db representation of uploaded images  */
type Image struct {
	ID       bson.ObjectId `bson:"_id,omitempty" json:"_id,omitempty" binding:"required"`
	Uri      string        `bson:"uri" json:"uri"`
	Uploaded time.Time     `bson:"updloaded" json:"updloaded"`
}
