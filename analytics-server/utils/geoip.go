package utils

import (
	"github.com/oschwald/geoip2-golang"
	"log"
	"sync"
)
var singleton2 *geoip2.Reader
var once2 sync.Once
func GetIPDB() *geoip2.Reader {
	once2.Do(func() {
		db, err := geoip2.Open("GeoIP2-City.mmdb")
		if err != nil {
			log.Fatal(err)
		}
		singleton2 = db;
	})
	return singleton2
}