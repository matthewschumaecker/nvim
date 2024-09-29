function addTwoNumbers(a, b) {
	return a + b;
}

console.log(addTwoNumbers(1, 2)); // 3

function areaOfCircle(radius) {
	return Math.PI * radius * radius;
}

function echoCardiacOuput(LVOTDiam, LVOTVti, AVVti) {
	return areaOfCircle(LVOTDiam / 2) * LVOTVti / AVVti;
}

function gorlinFormula(gradient, cardiacOutput, valveArea) {
	return cardiacOutput / (gradient * valveArea);
}
function dukeTreadmillScore(mets, angina, exerciseTime, STDev, metsMax, STMax) {
	return mets + angina + exerciseTime + STDev + metsMax + STMax;
}

function test() {
	console.log('test');
}

const love = 0;

console.log(love ? 'She loves me' : 'She loves me not')
