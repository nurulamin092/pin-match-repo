
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