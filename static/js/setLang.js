language = localStorage.getItem("language")
if (language === null){
    localStorage.setItem("language", "en");
}

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
        changeLang(value);
    }
}

var langList = ['en', 'zh'];

function hideLang(lang) {
    var langElems = document.querySelectorAll('.' + lang)
    langElems.forEach((elem) => {
      elem.style.display = "none"
    })
}

function changeLang(lang) {
    langList.forEach((langEle) => {
      // if language matches, display
      if (langEle == lang) {
        var langElems = document.querySelectorAll('.' + langEle)
        langElems.forEach((elem) => {
          //console.log('elem.innerHTML:', elem.innerHTML)
          //console.log('elem.innerText:', elem.innerText)
          console.log('length, elem.innerText:', elem.innerText.length, elem.innerText, typeof elem.innerText)
          // console.log('typeof elem.innerText:', typeof elem.innerText)
          if (elem.innerText === null){
              console.log('elem.innerText === null')
          }
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
    changeLang(language)
    console.log('peter')
}

