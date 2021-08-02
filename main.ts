let strip = neopixel.create(DigitalPin.P2, 64, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(24)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
strip.setMatrixWidth(8)
strip.show()
basic.pause(500)
basic.forever(function () {
    strip.setMatrixColor(randint(0, 8), randint(0, 8), neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(randint(32, 48))
    strip.setMatrixColor(randint(0, 8), randint(0, 8), neopixel.colors(NeoPixelColors.Black))
    basic.pause(randint(32, 48))
    strip.show()
})
