package daos

import (
	"log"

	mgo "gopkg.in/mgo.v2"
)

/*DAO is DATA Access Object  */
type DAO struct {
	Server   string
	Database string
}

/*Dao is DAO instance  */
var Dao DAO

var db *mgo.Database

//Connect methods is set in the beginning. check if all database and collections ares already created. It create them it's not.
func (m *DAO) Connect() {
	log.Printf("connected")
	session, err := mgo.Dial(m.Server)
	if err != nil {
		log.Fatal(err.Error())
	}
	db = session.DB(m.Database)
}
