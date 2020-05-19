/*
	COMP 125 - Summer 2019
	Client - Side Web Development
	Joanne Filloti

	BMR Calculator - Assignment 1
	Estimate Web Page
	Author: Tiago Franco Finotti #301041366
	Date: May 27th 2019

	Filename: Assignment1.js
*/

// global variables
var bmr = 0;
var result = 0

// calculates BMR based on personal data and pshysical activity level
function calcBMR() {
	var age = document.getElementById("age").value;
	console.log("age: " + age);
	var weight = document.getElementById("weight").value;
	console.log("weight lb: " + weight);
	var heightFt = document.getElementById("heightFT").value;
	console.log("height ft: " + heightFt);
	var heightIn = document.getElementById("heightIN").value;
	console.log("height in: " + heightIn);
	switch (document.getElementById("gender").value) {
		case "1":
			bmr = 66 + (6.2 * weight) + (12.7 * ((heightFt * 12) + 1 * (heightIn))) - (6.76 * age);
			break;
		case "2":
			bmr = 655.1 + (4.35 * weight) + (4.7 * ((heightFt * 12) + 1 * (heightIn))) - (4.7 * age);
			break;
	}
	console.log("bmr: " + bmr);
	switch (document.getElementById("activity").value) {
		case "1":
			result = bmr * 1.53;
			break;
		case "2":
			result = bmr * 1.76;
			break;
		case "3":
			result = bmr * 2.25;
			break;
	}
	console.log("result: " + result);
	document.getElementById("estimate").innerHTML = result.toFixed(2) + " kcal/day";
}

// sets all form field values to defaults
function resetForm() {
	document.getElementById("age").value = "25";
	document.getElementById("weight").value = "165";
	document.getElementById("heightFT").value = "5";
	document.getElementById("heightIN").value = "10";
	document.getElementById("gender").value = "1";
	document.getElementById("activity").value = "1";
	calcBMR();
	createEventListeners();
}

// creates event listeners
function createEventListeners() {
	document.getElementById("age").addEventListener("change", calcBMR, false);
	document.getElementById("weight").addEventListener("change", calcBMR, false);
	document.getElementById("heightIN").addEventListener("change", calcBMR, false);
	document.getElementById("heightFT").addEventListener("change", calcBMR, false);
	document.getElementById("gender").addEventListener("change", calcBMR, false);
	document.getElementById("activity").addEventListener("change", calcBMR, false);
}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);