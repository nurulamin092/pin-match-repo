
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        console.log('got 3 digite and caling agin', pin);
        getPin();
    }

}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }
        console.log(number);
    }
    else {
        const previousNumber = calInput.value;
        const newNumber = previousNumber + number;
        calInput.value = newNumber;
    }


});