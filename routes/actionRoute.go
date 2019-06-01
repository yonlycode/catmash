package routes

import (
	"catmash/controllers"

	"github.com/labstack/echo"
)

//SyncActionRoutes bind actions routes to app
func SyncActionRoutes(a *echo.Echo) {
	a.GET("/match", controllers.GetMatchEndPoint)
	a.GET("/best", controllers.GetBestCatEndPoint)
	a.POST("/new-cat", controllers.NewCatEndPoint)

	a.POST("/vote-up/:id", controllers.VoteUpEndPoint)
	a.GET("/vote-up/:id", controllers.VoteUpEndPoint)

}
