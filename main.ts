let humedad = 0
let p1 = 0
input.onButtonPressed(Button.A, function () {
    humedad = pins.analogReadPin(AnalogPin.P0)
    p1 = pins.map(
    humedad,
    0,
    1023,
    0,
    100
    )
    if (p1 >= 80) {
        basic.showIcon(IconNames.No)
    } else if (p1 <= 20) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
	
})
