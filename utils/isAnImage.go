package utils

import "strings"

/*IsAnImage return false if name extension isn't for an image  */
func IsAnImage(s string) bool {
	switch {
	case strings.HasSuffix(s, ".jpg"):
		return true
	case strings.HasSuffix(s, ".jpeg"):
		return true
	case strings.HasSuffix(s, ".png"):
		return true
	case strings.HasSuffix(s, ".JPG"):
		return true
	case strings.HasSuffix(s, ".PNG"):
		return true
	case strings.HasSuffix(s, ".JPEG"):
		return true
	default:
		return false
	}
}
