radio.onReceivedNumber(function (receivedNumber) {
    receivedNumber = receivedNumber
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.SmallHeart)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
