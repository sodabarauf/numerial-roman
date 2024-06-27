function convertToRoman(num) {
  const map = {
    M: 1000, 
    CM: 900, 
    D: 500, 
    CD: 400, 
    C: 100, 
    XC: 90, 
    L: 50, 
    XL: 40, 
    X: 10, 
    IX: 9, 
    V: 5, 
    IV: 4, 
    I: 1,
  };

  let roman = '';                    
  for (const i in map) {                   
    while (num >= map[i]) {            
      roman += i;                   
      num -= map[i];                   
    }
  }
  return roman;                        
}

console.log(convertToRoman(55));
const convertBtnEvent = document.getElementById('convert-btn');      

convertBtnEvent.addEventListener('click', function() {
  const value = document.getElementById('number').value;
  const output = document.getElementById('output');       

  if (convertToRoman(value === '' )) {                                   
    output.innerHTML = 'please enter a valid number';
  }
  if(convertToRoman(value >= 1 && value <= 3999 )) {                                  
    output.innerHTML = convertToRoman(value);
  } else if(value < 0) {
    output.textContent = 'Please enter a number greater than or equal to 1';
  } else if(value >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999';
  }  
});
