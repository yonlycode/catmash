package main

import (
	"catmash/controllers"
	"catmash/daos"
	"catmash/routes"
	"catmash/utils"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"golang.org/x/crypto/acme/autocert"
)

/*
					HEY BRO' !!!!
	 DON'T FORTGET YOU HAVE TO :
		 -SECURE API

*/
var (
	dbDao daos.DAO
)

func init() {
	utils.LoadEnv()
	dbDao.Server = os.Getenv("DB_SERVER")
	dbDao.Database = os.Getenv("DB_NAME")
	connectDb()

}

func connectDb() {
	dbDao.Connect()
	controllers.Dao = &dbDao
}

func main() {

	/* App instance */
	e := echo.New()

	/* loger */
	e.Use(middleware.LoggerWithConfig(middleware.DefaultLoggerConfig))
	e.Use(middleware.Recover())
	e.Use(middleware.Secure())
	e.Use(middleware.Gzip())

	/* Bind routes */
	routes.SetRoutes(e)

	//If prod is true in .env file
	if os.Getenv("PROD") == "true" {

		// dns autorisation
		e.AutoTLSManager.HostPolicy = autocert.HostWhitelist("catmash.tk", "www.catmash.tk")
		// cache file
		e.AutoTLSManager.Cache = autocert.DirCache("/var/www/.cache")

		// Http server
		go func(c *echo.Echo) {
			// https redirection
			e.Pre(middleware.HTTPSRedirect())
			e.Logger.Fatal(e.Start(os.Getenv("HTTP")))
		}(e)

		// Https server
		e.Logger.Fatal(e.StartAutoTLS(os.Getenv("HTTPS")))
	} else {

		e.Logger.Fatal(e.Start(os.Getenv("HTTP")))
	}

}
