var total, number;

function validateInteger(number) {
    if(number % 1 == 0) {
        return true;
    } else {
        return false;
    }
}

function validateNumber(number) {
    if(typeof number != 'number') {
        console.log('Error. WE NEED NUMBERS!!');
        return NaN;
    } else {
        return true;
    }
}

function validateIntegerAndRound(number) {
    if(!validateInteger(number)) {
        number = Math.round(number)
        console.log('Your number is not a integer... But we did it for you: ' + number);
        return number;
    } else {
        return number;
    }
}

function bothValidations(number) {
    return validateNumber(number) && validateIntegerAndRound(number);
}

var numbers = [];                                       // num | num        num | string        string | string        string      num     null       indefined
function superSum(numbers) {
    total = 0;
    if (typeof numbers != 'object' || numbers.length == 0) {
        return console.log('Please give an array');
    }
    numbers.forEach(number => {
        validationResult = bothValidations(number);
        if (validationResult) {
            total += validationResult;
        }
    });
    console.log(total);
}

superSum([9]);