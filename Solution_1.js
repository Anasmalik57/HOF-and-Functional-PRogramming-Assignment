// Reverse a String after delay of 2 seconds

function reverseString(str) {
    return str.split("").reverse().join("");
}
let input = "Anas";
function ReverseAfterDelay(input) {
    setTimeout(() => {
        let reversed = reverseString(input)
        console.log(reversed);
    }, 2000);
}
ReverseAfterDelay(input.toUpperCase())

