package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

/*Cat is db representation of a cat */
type Cat struct {
	ID      bson.ObjectId `bson:"_id,omitempty" json:"_id,omitempty" binding:"required"`
	Img     Image         `bson:"img" json:"img"`
	Vote    int           `bson:"vote" json:"vote"`
	Created time.Time     `bson:"created" json:"created"`
}
