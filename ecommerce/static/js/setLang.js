
language = localStorage.getItem("language")
if (language === null) {
    localStorage.setItem("language", "en_us")
} else {
    console.log("preferred language:", language)
}
console.log("localStorage end")
