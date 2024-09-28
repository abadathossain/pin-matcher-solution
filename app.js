function getPin() {
    const pin = generatePin()
    const pinString = pin + ""
    if (pinString.length === 4) {
        return pin
    } else {
        // console.log("not 3 digit")
        return getPin()
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin()
    // console.log(pin)
    const displayPin = document.getElementById('display-pin')
    displayPin.value = pin
})

document.getElementById('calculator').addEventListener('click', function (event) {
    // console.log(event.target.innerText)
    const number = event.target.innerText
    const typeNumberField = document.getElementById('typed-numbers')
    const previousTypeNumber = typeNumberField.value
    console.log(previousTypeNumber)

    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = ''
        } 
    }else if (number === '<') {
        const digits = previousTypeNumber.split('')
        digits.pop()
        const remainingDigits = digits.join('')
        typeNumberField.value = remainingDigits

    } else {
        const newTtypeNumber = previousTypeNumber + number
        typeNumberField.value = newTtypeNumber
    }
})