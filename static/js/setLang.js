
ele_returned = document.getElementById("lang_selector");
if (ele_returned !== null){
    ele_returned.onchange = langChangeListener;
}
		
const langs = ['en_us', 'zh-hans', 'zh-hant'];

function clearStorage(){
    language = localStorage.getItem("language")
    if (!(langs.includes(language))){
        localStorage.clear();
    }
}

function langChangeListener()
{
    var value = this.value

    if (langs.includes(value)){
        localStorage.setItem("language", value);
        changeLang(value);
    }
}
function changeLang(lang) {
    console.log("Language selected 999", lang);
}
clearStorage()
