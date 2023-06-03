const millimeterEl = document.querySelector("#millimeter");
const centimeterEl = document.querySelector("#centimeter");
const meterEl = document.querySelector("#meter");
const kilometerEl = document.querySelector("#kilometer");

function millimeter(value) {
	centimeterEl.value = value / 10;
	meterEl.value = value / 1000;
	kilometerEl.value = value / 1000000;
}

function centimeter(value) {
	millimeterEl.value = value * 10;
	meterEl.value = value / 100;
	kilometerEl.value = value / 100000;
}

function meter(value) {
	millimeterEl.value = value * 1000;
	centimeterEl.value = value * 100;
	kilometerEl.value = value / 1000;
}

function kilometer(value) {
	millimeterEl.value = value * 1000000;
	centimeterEl.value = value * 10000;
	meterEl.value = value * 1000;
}