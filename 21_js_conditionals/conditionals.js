const temperature = 29

/* if/else */
if (temperature < 19) {
    console.log("Wear a Coat")
} else {
    console.log("do nothing")
}

/* if/else if/else */
if (temperature <= 15) {
    console.log("sweather")
} else if (temperature <= 25) {
    console.log('coat')
} else {
    console.log('shirt')
}

/* switch */
switch(temperature) {
    case(10):
        console.log('coat')
        break
    case(15):
        console.log('sweather')
        break
    case(20):
        console.log('shorts')
        break
    case(30):
        console.log('t-shirt')
    default:
        console.log('You are not on our planet')
}       