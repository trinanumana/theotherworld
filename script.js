// these four functions work by locating the ID of a certain element, in this case it's the dark boxes, and it adds text, aka the innerHTML, to the div in the HTML with the ID the function is focusing on.
// if you wanted to make the JavaScript interact with both, HTML and CSS, you could use something along the lines of 'document.getElementById("x").classList.add("b");'
function showText(e) {
	document.getElementById("kittytalk").innerHTML="Cats sleep, on average, 13 to 14 hours a day.";
}

function showDif(e) {
	document.getElementById("kittytalk2").innerHTML="The fattest cat on record weighs 46lbs. 15.2oz.";
}

function showOther(e) {
	document.getElementById("kittytalk3").innerHTML="Welcome to the World of Cats. Here, you can find facts on felines.";
}

function showPara(e) {
	document.getElementById("kittytalk4").innerHTML="Cats show emotion by the way they move their tail.";
}

// this function removes the innerHTML from the dark boxs (by locating the IDs of each
function resetInner(e) {
	document.getElementById("kittytalk").innerHTML="";
	document.getElementById("kittytalk2").innerHTML="";
	document.getElementById("kittytalk3").innerHTML="";
	document.getElementById("kittytalk4").innerHTML="";
}

//CODE FROM https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
// AUDIO FROM http://www.orangefreesounds.com/category/sound-effects/animal-sounds/cat-meow-sound/
// these functions work when the element, img, is clicked on. in the HTML, the img has an 'onclick' and that commands the javascript to play the audio file that's specified in the singular function. For this, nothing from the CSS is being pulled or added.
function playMeow(e) {
	var audio = new Audio('meowp3/meow1.mp3');
	audio.play();
}

function playSound(e) {
	var audio = new Audio('meowp3/meow2.mp3');
	audio.play();
}

function playAudio(e) {
	var audio = new Audio('meowp3/meow3.mp3');
	audio.play();
}

function playMusic(e) {
	var audio = new Audio('meowp3/meow4.mp3');
	audio.play();
}
