package routes

import (
	"github.com/labstack/echo"
)

//SetRoutes (application) => set all routes
func SetRoutes(a *echo.Echo) {

	/* Serve React Client here  */
	a.Static("", "./client/build")

	/* uploaded images will be here  */
	a.Static("/img", "./upload/img")

	/* dispatch api group and bind them to controller */
	SyncUserAPI(a.Group("/api/user"))
	SyncCatAPI(a.Group("/api/cat"))

	/* Bind actions routes */
	SyncActionRoutes(a)

	/*Set redirection to application on 404  */
	a.HTTPErrorHandler = func(err error, c echo.Context) {
		// render 404 page
		c.File("./client/build/index.html")
	}

}
