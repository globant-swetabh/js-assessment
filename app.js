function getPositiveNumbers(array) {
    let result = [];
    for (let i = 0; i <= array.length; i++) {
        if (Math.sign(array[i]) === 1) {
            result.push(array[i])
        }
    }
    return result;
}

function returnCommonElements(arr1, arr2) {
    let result = [...arr1];
    for (let i = 0; i < arr2.length; i++) {
        if (result.includes(arr2[i])) {
            result.pop(arr2[i])
        }
        else {
            result.push(arr2[i])
        }
    }
    return result;
}

function convertToTitleCase(word) {
    const wordArray = word.split(' ');
    let result = [];
    for (let i = 0; i < wordArray.length; i++) {
        let word = wordArray[i].split('');
        word[0] = word[0].toUpperCase();
        result.push(word.join(''));
    }

    return result.join(' ')
}

module.exports = { convertToTitleCase, returnCommonElements, getPositiveNumbers};

