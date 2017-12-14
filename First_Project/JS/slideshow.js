// JavaScript Document
var t;
var currentIndex = 1; 

function next() {
	clearInterval(t);
	if (currentIndex < 10) {
		currentIndex++; 
		document.getElementById("imgSlide") .src = "images/" + currentIndex + ".jpg"; 
	}
	else{
		currentIndex = 1; 
		document.getElementById("imgSlide").src = "images/" + currentIndex + ".jpg"; 
	}
	
	t = setInterval("next()", 4000); 
}

function back() {
	clearInterval(t); 
	if (currentIndex > 1) {
		currentIndex--; 
		document.getElementById("imgSlide") .src = "images/" + currentIndex + ".jpg"; 
	}
	else {
		currentIndex = 10; 
		document.getElementById("imgSlide") .src = "images/" + currentIndex + ".jpg";
	}
	
	t = setInterval("next()", 4000); 
}

t = setInterval("next()", 4000); 