input.onGesture(Gesture.LogoDown, function () {
    if (!(input.buttonIsPressed(Button.A))) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (!(input.buttonIsPressed(Button.A))) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (!(input.buttonIsPressed(Button.A))) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (!(input.buttonIsPressed(Button.A))) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
