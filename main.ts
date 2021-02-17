let a = 0
let l = 0
let r = 0
basic.forever(function () {
    a = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (a == 0 || a > 30) {
        l = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
        r = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
        if (l == 0) {
            if (r == 0) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            } else {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            }
        } else {
            if (r == 0) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            } else {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
            }
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
