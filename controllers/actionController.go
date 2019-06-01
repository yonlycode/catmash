package controllers

import (
	"catmash/models"
	"catmash/utils"
	"io"
	"net/http"
	"os"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

/*NewCatEndPoint is controller for add cat with image uploading  */
func NewCatEndPoint(c echo.Context) error {

	//Get Image
	file, err := c.FormFile("file")
	if err != nil {
		return err
	}
	src, err := file.Open()
	if err != nil {
		return err
	}
	defer src.Close()

	// Destination
	dst, err := os.Create("upload/img/" + file.Filename)
	if err != nil {
		return err
	}
	defer dst.Close()

	// Copy
	if _, err = io.Copy(dst, src); err != nil {
		return err
	}

	//set Model
	var m models.Cat

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, err.Error())
	}

	//generate id/date
	m.ID = bson.NewObjectId()
	m.Created = time.Now()
	m.Img = "/img/" + file.Filename

	//insert to model to database
	if err := Dao.InsertCat(m); err != nil {
		return c.String(500, err.Error())
	}

	return c.JSON(http.StatusOK, m)
}

/*VoteUpEndPoint increase vote score on selected cat  */
func VoteUpEndPoint(c echo.Context) error {
	//get cat
	cat, err := Dao.FindCatByID(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}

	//upgrade scoring
	cat.Vote = cat.Vote + 1

	//update model into database
	if err := Dao.UpdateCat(cat); err != nil {
		return c.String(500, err.Error())
	}
	//return success
	return c.String(200, "Voted")
}

/*GetMatchEndPoint return 2 cats for a match*/
func GetMatchEndPoint(c echo.Context) error {

	//get cats array
	cats, err := Dao.FindAllCats()
	if err != nil {
		return c.String(500, err.Error())
	}

	//get length of cat array
	max := len(cats)

	//generate 2 index range between 0 and max
	i1 := utils.GetRandomNumber(0, max)
	i2 := utils.GetRandomNumber(0, max)

	//push cat item to @result array
	var result []models.Cat
	result = append(result, cats[i1])
	result = append(result, cats[i2])

	//return 2 random cats
	return c.JSON(200, result)
}

/*GetBestCatEndPoint return all cats sort by votes  */
func GetBestCatEndPoint(c echo.Context) error {
	//get best cats array
	cats, err := Dao.FindBestCats()
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, cats)
}
