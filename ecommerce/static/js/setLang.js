ele_returned = document.getElementById("lang_selector");
if (ele_returned !== null){
    ele_returned.onchange = langChangeListener;
}
		
const langs = ['en', 'zh'];

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
        changeLang_peter(value)
        changeLang(value);
    }
}
function changeLang(lang) {
    console.log("Language selected 999", lang);
}

var langList = ['en', 'zh'];

function hideLang(lang) {
    var langElems = document.querySelectorAll('.' + lang)
    langElems.forEach((elem) => {
      elem.style.display = "none"
    })
}

function changeLang_peter(lang) {
    langList.forEach((langEle) => {
      // if language matches, display
      if (langEle == lang) {
        var langElems = document.querySelectorAll('.' + langEle)
        langElems.forEach((elem) => {
          elem.style.display = "block"
        })
      }
      // hide the language text
      else {
        hideLang(langEle)
      }
    })
}

language = localStorage.getItem("language")
if (language !== null){
    changeLang_peter(language)
    console.log('peter')
}

