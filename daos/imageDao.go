package daos

import (
	"catmash/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	imageCollection = "images"
)

/*FindAllImages return all images  */
func (m *DAO) FindAllImages() ([]models.Image, error) {
	var cats []models.Image
	err := db.C(imageCollection).Find(bson.M{}).Sort("-uploaded").All(&cats)
	return cats, err
}

/*FindImageByID return selected image  */
func (m *DAO) FindImageByID(id string) (models.Image, error) {
	var img models.Image
	err := db.C(imageCollection).FindId(bson.ObjectIdHex(id)).One(&img)
	return img, err
}

/*InsertImage insert image to db, return err if can't  */
func (m *DAO) InsertImage(cat models.Image) error {
	err := db.C(imageCollection).Insert(&cat)
	return err
}

/*DeleteImage delete selected image, return err if can't */
func (m *DAO) DeleteImage(id string) error {
	err := db.C(imageCollection).RemoveId(id)
	return err
}

/*UpdateImage update an image */
func (m *DAO) UpdateImage(img models.Image) error {
	err := db.C(imageCollection).UpdateId(img.ID, &img)
	return err
}
