package routes

import (
	"catmash/controllers"

	"github.com/labstack/echo"
)

//SyncUserAPI link routes and controllers for the user api
func SyncUserAPI(a *echo.Group) {

	a.GET("/", controllers.AllUsersEndPoint)

	a.POST("/", controllers.CreateUserEndPoint)

	a.PUT("/", controllers.UpdateUserEndPoint)

	a.GET("/:id", controllers.FindUserEndPoint)

	a.DELETE("/:id", controllers.DeleteUserEndPoint)
}
