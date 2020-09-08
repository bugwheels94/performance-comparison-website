package main

import (
	"analytics/auth"
	"analytics/routes"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.POST("/auth/token/browser",
		auth.IfBrowserNotAuth,
		auth.RegisterBrowser)

	router.POST("/auth/token/recording/:project", auth.IfBrowserAuth, auth.RegisterRecording)
	// router.POST("/projects/:project/funnel", auth.IfBrowserAuth, funnel.NewEntry)

	tracks := router.Group("/tracks")

	tracks.Use(auth.IfRecordingTrackAuth)
	{
		tracks.POST("/data", routes.InsertTrackData)
	}

	log.Fatal(router.Run(":5001"))
}
