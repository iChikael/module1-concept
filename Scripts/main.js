// window.addEventListener("load", function() { 
//    document.body.style.width='100%';
//    document.body.style.height='100%';
// }, false);

function updateClock() { 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var currentMonth = currentTime.getMonth() + 1;
var currentMonth1 = currentMonth < 10 ? '0' + currentMonth : currentMonth;
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h"){
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + "" + currentMinutes;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + "" + currentMinutes;
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = currentMinutes;
document.getElementById("ampm").innerHTML = timeOfDay;
document.getElementById("weekday").innerHTML = days[currentTime.getDay()];
document.getElementById("date").innerHTML = currentDate;
document.getElementById("month").innerHTML = shortmonths[currentTime.getMonth()];
document.getElementById("year").innerHTML = currentTime.getFullYear() + " - ";
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}



	
var sheet = document.createElement('style')
        sheet.innerHTML = "#R{background-color:" + highColor + ";} #weekday,#hashtag,#period{color:" + highColor + ";}";
        document.body.appendChild(sheet);

	
// document.getElementById('yourText').innerHTML = Motto;		


//  (function () {
//             'use strict';
//             if (window.innerWidth === 320) {
//                 document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=0.85, maximum-scale=0.85, user-scalable=0');
//             } else if (window.innerWidth === 414) {
//                 document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.104, maximum-scale=1.104, user-scalable=0');
//             } else if (window.innerWidth === 425) {
//                 document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.133, maximum-scale=1.133, user-scalable=0');
//             } else if (window.innerWidth === 432) {
//                 document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.152, maximum-scale=1.152, user-scalable=0');
//             }
//         }());
//         (function () {
//             'use strict';
//             if ((window.innerHeight / window.innerWidth) > 2) {
//                 document.getElementById("Widget").style.top = "50px";
//             } else {
//                 document.getElementById("Widget").style.top = "0px";
//             }
//         }());