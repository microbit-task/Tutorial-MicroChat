input.onButtonPressed(Button.A, function () {
    basic.showString("Hello World!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
