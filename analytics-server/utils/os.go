package utils

import (
	"fmt"
	"regexp"
	"sync"
)

type osRegex struct {
	name  string
	regex *regexp.Regexp
}

var once3 sync.Once
var singleton3 []osRegex

func c(r string) *regexp.Regexp {
	rs,
		e := regexp.Compile(r)
	if e != nil {
		fmt.Println(e)
	}
	return rs
}

// GetOS func
func GetOS(agent string) string {
	for _, value := range regex() {
		if value.regex.MatchString(agent) {
			return value.name
		}
	}
	return "None"
}
func regex() []osRegex {
	once3.Do(func() {
		singleton3 = []osRegex{
			{
				name:  "Windows 10",
				regex: c("(Windows 10.0|Windows NT 10.0)"),
			},
			{
				name:  "Windows 10",
				regex: c("(Windows 10.0|Windows NT 10.0)")},
			{
				name:  "Windows 8.1",
				regex: c("(Windows 8.1|Windows NT 6.3)")},
			{
				name:  "Windows 8",
				regex: c("(Windows 8|Windows NT 6.2)")},
			{
				name:  "Windows 7",
				regex: c("(Windows 7|Windows NT 6.1)")},
			{
				name:  "Windows Vista",
				regex: c("Windows NT 6.0")},
			{
				name:  "Windows Server 2003",
				regex: c("Windows NT 5.2")},
			{
				name:  "Windows XP",
				regex: c("(Windows NT 5.1|Windows XP)")},
			{
				name:  "Windows 2000",
				regex: c("(Windows NT 5.0|Windows 2000)")},
			{
				name:  "Windows ME",
				regex: c("(Win 9x 4.90|Windows ME)")},
			{
				name:  "Windows 98",
				regex: c("(Windows 98|Win98)")},
			{
				name:  "Windows 95",
				regex: c("(Windows 95|Win95|Windows_95)")},
			{
				name:  "Windows NT 4.0",
				regex: c("(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)")},
			{
				name:  "Windows CE",
				regex: c("Windows CE")},
			{
				name:  "Windows 3.11",
				regex: c("Win16")},
			{
				name:  "Android",
				regex: c("Android")},
			{
				name:  "Open BSD",
				regex: c("OpenBSD")},
			{
				name:  "Sun OS",
				regex: c("SunOS")},
			{
				name:  "Chrome OS",
				regex: c("CrOS")},
			{
				name:  "Linux",
				regex: c("(Linux|X11)")},
			{
				name:  "iOS",
				regex: c("(iPhone|iPad|iPod)")},
			{
				name:  "Mac OS X",
				regex: c("Mac OS X")},
			{
				name:  "Mac OS",
				regex: c("(MacPPC|MacIntel|Mac_PowerPC|Macintosh)")},
			{
				name:  "QNX",
				regex: c("QNX")},
			{
				name:  "UNIX",
				regex: c("UNIX")},
			{
				name:  "BeOS",
				regex: c("BeOS")},
			{
				name:  "OS'2",
				regex: c("OS\\/2")},
			{
				name:  "Search Bot",
				regex: c("(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\"Teoma|ia_archiver)")}}
	})
	return singleton3
}
