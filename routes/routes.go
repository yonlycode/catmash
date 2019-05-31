package routes

import (
	"github.com/labstack/echo"
)

var (
	/*CatR is cat API Router group for cats  */
	CatR *echo.Group
	/*ImgR is image API Router group for images  */
	ImgR *echo.Group
	/*UserR is user API Router group for users  */
	UserR *echo.Group
)

//SetRoutes (application) => set all routes
func SetRoutes(a *echo.Echo) {

	/* Serve React Client here  */
	a.Static("/", "./client/build")

	/* uploaded images will be here  */
	a.Static("/img", "./upload/img")

	/* dispatch group and bind them to controller */
	SyncUserAPI(a.Group("/api/user"))
	SyncCatAPI(a.Group("/api/cat"))

	SyncActionRoutes(a)

}
