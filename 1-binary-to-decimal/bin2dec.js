const form = document.querySelector('.form');
const outputContainer = document.querySelector('#decimal-output');

const convertToDecimal = () => {
  const inputField = document.querySelector('#binary-input');
  const userInput = inputField.value;
  let decimals = [];

  for (let i=0; i<userInput.length; i++) {
    // exponents in binary start with right most number
    // but our index count in the string starts at left
    let maxPower = userInput.length - 1;
    let currentPower = maxPower - i;

    let binary = userInput[i];
    let pow = calculatePowerOfTwo(currentPower);
    let decimal = binary * pow;

    decimals.push(decimal);
  }

  let converted = sumOfArray(decimals);
  return sumOfArray(decimals);
};

const calculatePowerOfTwo = (power) => {
  return Math.pow(2, power);
}

const sumOfArray = (array) => {
  return array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)
}

const submitForm = function() {
  event.preventDefault();
  outputContainer.value = convertToDecimal();
}

form.onsubmit = submitForm;
