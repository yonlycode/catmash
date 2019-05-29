package routes

import (
	"github.com/labstack/echo"
)

//SetRoutes (application) => set all routes
func SetRoutes(a *echo.Echo) {
	a.Static("/", "./client/build")
	a.Static("/images", "./Img")
}
