package controllers

import (
	"catmash/models"
	"fmt"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllCatsEndPoint return all cats
func AllCatsEndPoint(c echo.Context) error {
	//get cats array
	cats, err := Dao.FindAllCats()
	if err != nil {
		return c.String(500, err.Error())
	}
	//Return cats array
	return c.JSON(200, cats)
}

//FindCatEndPoint return selected cat by id
func FindCatEndPoint(c echo.Context) error {
	//get cat
	cat, err := Dao.FindCatByID(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	//return cat
	return c.JSON(200, cat)

}

// CreateCatEndPoint create a cat entity
func CreateCatEndPoint(c echo.Context) error {
	//set Model
	var m models.Cat

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dao.InsertCat(m); err != nil {
		return c.String(500, err.Error())
	}

	//return success
	return c.String(200, "Cat Created successfully")
}

//UpdateCatEndPoint update cat data, return err if can't
func UpdateCatEndPoint(c echo.Context) error {
	//set Model
	var m models.Cat

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, err.Error())
	}
	//update model into database
	if err := Dao.UpdateCat(m); err != nil {
		return c.String(500, err.Error())
	}
	//return success
	return c.String(200, "Cat Updated successfully")
}

// DeleteCatEndPoint delete selected cat user
func DeleteCatEndPoint(c echo.Context) error {
	//delete cat
	err := Dao.DeleteCat(c.Param("id"))
	fmt.Println(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	//return succes message
	return c.JSON(200, "deleted successfully")
}
