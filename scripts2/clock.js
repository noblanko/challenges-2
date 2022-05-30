//update each second 
setInterval(updateTime, 1000);

//date
var now = new Date();

function updateTime() {

	var monthName = [
		'January',
		'February',
		'March',
		'April', 
		'May', 
		'June', 
		'July', 
		'August', 
		'September',
		'October', 
		'November',
		'December'
		];



//DOM
 document.getElementById('date').innerHTML = now.getDate() +' '+ monthName[now.getMonth()]; 
 document.getElementById('time').innerHTML = now.getHours() +':'+ addZero(now.getMinutes()) +':'+ addZero(now.getSeconds());
    }

//adding zero before minutes and seconds singular numbers
function addZero(number){
	if(number < 10){
		number = "0" + number;
	}
	return number;
}

//changing to moon/sun depending on time (didn't get to work)

    var thisHour = now.getHours(); 
    
     if (thisHour >= 20 || thisHour <= 6){
         document.getElementById("sun").src = "images2/moon.png";
     }

    

