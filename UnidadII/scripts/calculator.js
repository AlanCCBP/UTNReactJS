window.onload = function(){
	document.getElementById("divide").onclick = divide;
	document.getElementById("multiply").onclick = multiply;
	document.getElementById("sum").onclick = sum;
	document.getElementById("substract").onclick = substract;
	document.getElementById("close").onclick = close;
	close();
}

function divide() {

	var aNumber = parseFloat(document.getElementById("first-number").value);
	var anotherNumber = parseFloat(document.getElementById("second-number").value);

	if(inputIsEmpty(aNumber) || inputIsEmpty(anotherNumber)){
		return false;
	}

	if(anotherNumber === 0){
		document.getElementById("operation-result").innerText = "ERROR. Divide by Zero.";
		document.getElementById("first-number").value = 0;
		document.getElementById("second-number").value = 0;

		return false;
	}

	document.getElementById("operation-result").innerText = parseFloat(aNumber / anotherNumber);

}

function multiply() {

	var aNumber = parseFloat(document.getElementById("first-number").value);
	var anotherNumber = parseFloat(document.getElementById("second-number").value);

	if(inputIsEmpty(aNumber) || inputIsEmpty(anotherNumber)){
		return false;
	}

	document.getElementById("operation-result").innerText = parseFloat(aNumber * anotherNumber);

	return true;

}

function sum() {

	var aNumber = parseFloat(document.getElementById("first-number").value);
	var anotherNumber = parseFloat(document.getElementById("second-number").value);

	if(inputIsEmpty(aNumber) || inputIsEmpty(anotherNumber)){
		return false;
	}

	document.getElementById("operation-result").innerText = parseFloat(aNumber + anotherNumber);

	return true;

}

function substract() {

	var aNumber = parseFloat(document.getElementById("first-number").value);
	var anotherNumber = parseFloat(document.getElementById("second-number").value);

	if(inputIsEmpty(aNumber) || inputIsEmpty(anotherNumber)){
		return false;
	}

	document.getElementById("operation-result").innerText = parseFloat(aNumber - anotherNumber);

	return true;

}

function close() {

	document.getElementById("first-number").value = 0;
	document.getElementById("second-number").value = 0;
	document.getElementById("operation-result").innerText = "0.";

	return true;

}

function inputIsEmpty(aValue) {

	if((aValue === "") || (isNaN(aValue))){

		document.getElementById("operation-result").innerText = "ERROR.";

		return true;
	}

	return false;

}

function clearNumberInputField(element){

	element.value = "";

}