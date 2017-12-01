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
	document.getElementById("kittytalk4").innerHTML="You can tell how your cat is feelin gby the way they're moving their tail.";
}

function myTabby() {
	var element=document.getElementById("tcat");
	element.classList.remove("hidden");
}

function makeTabby() {
	var element=document.getElementById("tcat");
	element.classList.add("hidden");
}

function myRussianb() {
	var element=document.getElementById("rbcat");
	element.classList.remove("hidden");
}

function makeRussianb() {
	var element=document.getElementById("rbcat");
	element.classList.add("hidden");
}

function myOrange() {
	var element=document.getElementById("ocat");
	element.classList.remove("hidden");
}

function makeOrange() {
	var element=document.getElementById("ocat");
	element.classList.add("hidden");
}

function myWhiteBrown() {
	var element=document.getElementById("wcat");
	element.classList.remove("hidden");
}

function makeWhiteBrown() {
	var element=document.getElementById("wcat");
	element.classList.add("hidden");
}
