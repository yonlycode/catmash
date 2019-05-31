package routes

import (
	"catmash/controllers"

	"github.com/labstack/echo"
)

//SyncActionRoutes bind actions routes to app
func SyncActionRoutes(a *echo.Echo) {
	a.POST("/new-cat", controllers.NewCat)
	a.POST("/vote-up/:id", controllers.VoteUp)
}
