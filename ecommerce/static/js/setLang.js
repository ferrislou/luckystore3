
document.getElementById("lang_selector").onchange = langChangeListener;
		
const langs = ['en_us', 'zh-hans', 'zh-hant'];

function langChangeListener()
{
    var value = this.value

    if (langs.includes(value)){
        localStorage.setItem("language", value);
        changeLang(value);
        // language = localStorage.getItem("language")
    }
}
function changeLang(lang) {
    console.log("Language selected", lang);
}
// localStorage.clear();
console.log("localStorage end")
