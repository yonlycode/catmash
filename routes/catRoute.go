package routes

import (
	"catmash/controllers"

	"github.com/labstack/echo"
)

//SyncCatAPI link routes and controllers for the cat api
func SyncCatAPI(a *echo.Group) {

	a.GET("/", controllers.AllCatsEndPoint)

	a.POST("/", controllers.CreateCatEndPoint)

	a.PUT("/", controllers.UpdateCatEndPoint)

	a.GET("/:id", controllers.FindCatEndPoint)

	a.DELETE("/:id", controllers.DeleteCatEndPoint)
}
