
document.getElementById("lang_selector").onchange = langChangeListener;

const langs = ['en_us', 'zh-hans', 'zh-hant'];
		
function langChangeListener()
{
    var value = this.value
    const langs = ['en_us', 'zh-hans', 'zh-hant'];

    if (langs.includes(value)){
        changeLang(value);
    }
}
function changeLang(lang) {
	console.log("Language selected", lang);
}

language = localStorage.getItem("language")
if (language === null) {
    localStorage.setItem("language", "en");
} else {
    console.log("preferred language:", language)
    if (language === "en_us") {
        console.log("preferred language:", language);
    } else if (language === "zh-hans") {
        console.log("preferred language:", language);
    } else if (language === "zh-hant") {
        console.log("preferred language:", language);
    }
}

// localStorage.clear();
console.log("localStorage end")

window.setInterval(changeText, 1000);
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log('datetime:', datetime)

function changeText(){
    var currentdate = new Date(); 
    var date = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear()  
    var time = currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    ele_returned = document.getElementById('datetime').innerHTML = 'Date:' + date + ' Time:' + time;
}