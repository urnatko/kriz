for (let x = 0; x <= 4; x++) {
    led.plot(x, x)
    led.plot(4 - x, x)
    basic.pause(1000)
}
basic.forever(function () {
	
})
