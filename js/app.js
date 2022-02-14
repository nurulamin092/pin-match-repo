
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
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
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successMassage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMassage.style.display = 'none';

    }
}
