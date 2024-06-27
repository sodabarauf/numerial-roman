const convertBtn = document.getElementById('convert-btn');

function convertToRoman(num) {
  const romanNumerals = [
    {1000: 'M'},
    {900: 'CM'},
    {500: 'D'},
    {400: 'CD'},
    {100; 'C'},
    {90: 'XC'},
    {50: 'L'},
    {40: 'XL'},
    {10: 'X'},
    {9: 'IX'},
    {5: 'V'},
    {4: 'IV'},
    {1: 'I'},
  ];

  let result = '';

  for (let i = 0; i < romanNumerals.length; i += 1) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;

      num -= romanNumerals[i].value;
    }
  }

  return result;
}

convertBtn.addEventListener('click', () => {
  const value = document.getElementById('number').value;
  const output = document.getElementById('output'); 
  if (convertToRoman(value === '')) {                    
    output.innerHTML = 'please enter a valid number';
  } if (convertToRoman(value >= 1 && value <= 3999)) {                     
    output.innerHTML = convertToRoman(value);
  } else if (value < 0) {
    output.textContent = 'Please enter a number greater than or equal to 1';
  } else if (value >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999';
  }
});
