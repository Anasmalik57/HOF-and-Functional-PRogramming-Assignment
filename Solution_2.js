// Random Number Generator with Delay and Progress Indication: 

function GenerateRandomFunction(delay) {
    // display remaining time every second
    for (let i = delay; i > 0; i--) {
        setTimeout(() => {
            console.log(`Time Remaining: ${i} Seconds`)
        }, (delay - i) * 1000);
    }

    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 100)
        console.log(`Random Number Generated: ${randomNumber}`)
    }, delay * 1000);
}
const TimeInSeconds = 3
GenerateRandomFunction(TimeInSeconds)
