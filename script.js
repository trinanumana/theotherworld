function showText(e) {
	document.getElementById("kittytalk").innerHTML="Did you know that cats sleep, on average, 13 to 14 hours a day?";
}

function showDif(e) {
	document.getElementById("kittytalk2").innerHTML="The fattest cat on record weighs 46lbs. 15.2oz.";
}

function showOther(e) {
	document.getElementById("kittytalk3").innerHTML="Hi! Welcome to the World of Cats. Here, you can find facts on cats. I hope you enjoy.";
}

function showPara(e) {
	document.getElementById("kittytalk4").innerHTML="You can tell how your cat is feeling by the way they're moving their tail.";
}

//AUDIO FROM http://www.orangefreesounds.com/category/sound-effects/animal-sounds/cat-meow-sound/

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
