let num = 0
let sends = 0
input.onButtonPressed(Button.A, function () {
    if (num == 0) {
        num = 1
    }
    if (num == 1) {
        radio.sendString("YES")
        basic.showString("YES")
        sends += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (num == 0) {
        num = 3
    }
    if (num == 1) {
        basic.showNumber(sends)
    }
})
input.onButtonPressed(Button.B, function () {
    if (num == 0) {
        num = 2
    }
    if (num == 1) {
        radio.sendString("NO")
        basic.showString("NO")
        sends += 1
    }
})
music.play(music.stringPlayable("E B C5 A B G A F ", 360), music.PlaybackMode.InBackground)
basic.showString("WELCOME")
basic.forever(function () {
    radio.setGroup(1)
})
