input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showString("" + (randint(1, 6)))
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
