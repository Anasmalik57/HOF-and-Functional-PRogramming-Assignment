const baseURLPattern = /(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/

function urlValidator(URL){
    return baseURLPattern.test(URL)
}

const testUrls = [
    // Invalid URLs
    "ftp://www.example.com",
    "http://www.example",
    "https://www.example",
    "http://example.com.",
    "https://example..com",
    // Genuine URLs
    "https://www.google.com",
    "https://en.wikipedia.org/wiki/Main_Page",
    "https://github.com/OpenAI/gpt-3.5-turbo",
    "https://www.amazon.com/dp/B07GQV21YH/",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
];

testUrls.forEach(URL=>{
    console.log(`URL: ${URL} is ${urlValidator(URL)? "valid" : "Invalid"} `);
})