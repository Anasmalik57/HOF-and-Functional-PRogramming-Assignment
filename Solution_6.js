const LinkedInPAttern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_~]{3,28}[a-zA-Z0-9]$/

function LinkedInValidator(URL) {
    return LinkedInPAttern.test(URL);
}
function CheckingValidity(URL) {
    if (LinkedInValidator(URL)) {
        console.log(`"${URL}" is Valid for LinkedIn Profile 😄`)
    }
    else console.log(`"${URL}" isn't Valid for LinkedIn Profile 🥲`)
}

CheckingValidity("https://www.linkedin.com/in/mohd-anas-b8548b269/"); // For valid URL
// CheckingValidity("https://www.linkedin.com/in/mohd-anas!b8548b269/"); // For valid URL