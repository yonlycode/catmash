package utils

import (
	"math/rand"
	"time"
)

/*GetRandomNumber return random number range beetwen @min and @max  */
func GetRandomNumber(min int, max int) int {
	rand.Seed(time.Now().UnixNano())
	return rand.Intn(max-min) + min
}
