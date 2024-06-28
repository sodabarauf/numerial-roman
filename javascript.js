let input = document.getElementById("number");
let button = document.getElementById("convert-btn");
let output = document.getElementById("output");


button.addEventListener("click", () => {
    let num = parseInt(input.value, 10);

    if(isNaN(num)){
        return output.textContent = "Please enter a valid number";
    } else if(num < 0){
        return output.textContent = "Please enter a number greater than or equal to 1";
    } else if(num >= 4000) {
        return output.textContent = "Please enter a number less than or equal to 3999";
    }

    let numString = num.toString().padStart(4,'0');
    numString = numString.split("");
    let romanNum = [];
    

singlesConverter(numString)
    .then(() => {
        return tensConverter(numString);
    })
    .then(() => {
        return hundredsConverter(numString);
    })
    .then(() => {
        thousandsConverter(numString);
    });

function singlesConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[3];
        let letterSingles;
        switch(num){
            case 0:
                letterSingles = "";
                break;
            case '1':
                letterSingles = 'I';
                break;
            case '2':
                letterSingles = 'II';
                break;
            case '3':
                letterSingles = 'III';
                break;
            case '4':
                letterSingles = 'IV';
                break;
            case '5':
                letterSingles = 'V';
                break;
            case '6':
                letterSingles = 'VI';
                break;
            case '7':
                letterSingles = 'VII';
                break;
            case '8':
                letterSingles = 'VIII';
                break;
            case '9':
                letterSingles = 'IX';
                break;
            }
        romanNum.push(letterSingles)
        resolve();
    });
}

function tensConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[2];
        let letterTens;
        switch(num){
            case 0:
                letterTens = "";
                break;
            case '1':
                letterTens = 'X';
                break;
            case '2':
                letterTens = 'XX';
                break;
            case '3':
                letterTens = 'XXX';
                break;
            case '4':
                letterTens = 'XL';
                break;
            case '5':
                letterTens = 'L';
                break;
            case '6':
                letterTens = 'LX';
                break;
            case '7':
                letterTens = 'LXX';
                break;
            case '8':
                letterTens = 'LXXX';
                break;
            case '9':
                letterTens = 'XC';
                break;
            }
            romanNum.push(letterTens)
            resolve();
    });
}

function hundredsConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[1];
        let letterHundreds;
        switch(num){
            case 0:
                letterHundreds = "";
                break;
            case '1':
                letterHundreds = 'C';
                break;
            case '2':
                letterHundreds = 'CC';
                break;
            case '3':
                letterHundreds = 'CCC';
                break;
            case '4':
                letterHundreds = 'CD';
                break;
            case '5':
                letterHundreds = 'D';
                break;
            case '6':
                letterHundreds = 'DC';
                break;
            case '7':
                letterHundreds = 'DCC';
                break;
            case '8':
                letterHundreds = 'DCCC';
                break;
            case '9':
                letterHundreds = 'CM';
                break;
            }
            romanNum.push(letterHundreds)
            resolve();
    });
}

function thousandsConverter(arr){
    return new Promise((resolve, reject) => {
        let num = arr[0];
        let letterThousands;
        switch(num){
            case "1":
                letterThousands = 'M';
                break;
            case "2":
                letterThousands = 'MM';
                break;
            case "3":
                letterThousands = 'MMM';
                break;
            case "0":
                letterThousands = "";
                break;
            }
            romanNum.push(letterThousands);
            romanNum.reverse();
            romanNum = romanNum.join("");
            romanNum = String(romanNum);
            output.textContent = romanNum;
            resolve ()
        });
    }
});