package utils

import (
	"os"
)

/*DeleteImage delete image from disk*/
func DeleteImage(s string) bool {
	err := os.Remove("./upload/img/" + s)
	if err != nil {
		return false
	}
	return true
}
