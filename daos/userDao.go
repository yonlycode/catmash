package daos

import (
	"catmash/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	userCollection = "users"
)

/*FindAllUsers return all users  */
func (m *DAO) FindAllUsers() ([]models.User, error) {
	var users []models.User
	err := db.C(userCollection).Find(bson.M{}).Sort("-date").All(&users)
	return users, err
}

/*FindUserById return selected user  */
func (m *DAO) FindUserById(id string) (models.User, error) {
	var user models.User
	err := db.C(userCollection).FindId(bson.ObjectIdHex(id)).One(&user)
	return user, err
}

/*FindUserByMail return selected user  */
func (m *DAO) FindUserByMail(mail string) (models.User, error) {
	var user models.User
	err := db.C(userCollection).Find(bson.M{"mail": mail}).One(&user)
	return user, err
}

/*InsertUser insert user, return err if can't  */
func (m *DAO) InsertUser(user models.User) error {
	err := db.C(userCollection).Insert(&user)
	return err
}

/*DeleteUser delete selected user, return err if can't  */
func (m *DAO) DeleteUser(id string) error {
	err := db.C(userCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

/*UpdateUser update selected user, return err if can't  */
func (m *DAO) UpdateUser(user models.User) error {
	err := db.C(userCollection).UpdateId(user.ID, &user)
	return err
}
