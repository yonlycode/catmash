package daos

import (
	"catmash/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	catCollection = "cats"
)

/*FindAllCats return all cats  */
func (m *DAO) FindAllCats() ([]models.Cat, error) {
	var cats []models.Cat
	err := db.C(catCollection).Find(bson.M{}).Sort("-created").All(&cats)
	return cats, err
}

/*FindBestCats return all cats sorted by votes */
func (m *DAO) FindBestCats() ([]models.Cat, error) {
	var cats []models.Cat
	err := db.C(catCollection).Find(bson.M{}).Sort("-vote").All(&cats)
	return cats, err
}

/*FindCatByID return selected cat  */
func (m *DAO) FindCatByID(id string) (models.Cat, error) {
	var cat models.Cat
	err := db.C(catCollection).FindId(bson.ObjectIdHex(id)).One(&cat)
	return cat, err
}

/*InsertCat insert cat to db, return err if can't  */
func (m *DAO) InsertCat(cat models.Cat) error {
	err := db.C(catCollection).Insert(&cat)
	return err
}

/*DeleteCat delete selected cat, return err if can't */
func (m *DAO) DeleteCat(id string) error {
	err := db.C(catCollection).RemoveId(id)
	return err
}

/*UpdateCat update a cat */
func (m *DAO) UpdateCat(cat models.Cat) error {
	err := db.C(catCollection).UpdateId(cat.ID, &cat)
	return err
}
