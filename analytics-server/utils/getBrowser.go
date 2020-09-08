package utils

import "github.com/avct/uasurfer"

func GetBrowser(agent string) *uasurfer.UserAgent {
	uaString := uasurfer.Parse(agent)
	return uaString
}
