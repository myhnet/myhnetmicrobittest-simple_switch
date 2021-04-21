basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) != 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
