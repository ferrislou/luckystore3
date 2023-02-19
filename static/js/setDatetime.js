
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
    ele_returned = document.getElementById('datetime')
    if (ele_returned !== null){
        ele_returned.innerHTML = 'Date:' + date + ' Time:' + time;
    }
}