var input = 'turpentine and turtles';

var vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const inputLetters = input[i];

    for (let j = 0; j < vowels.length; j++) {
        const vowelLetters = vowels[j];

        if (inputLetters.toLowerCase() === vowelLetters) {
            console.log('Letter matches');
            resultArray.push(inputLetters);

            if (inputLetters.toLowerCase() === 'e') {
                resultArray.push(inputLetters);

                if (inputLetters.toLowerCase() === 'u') {
                    resultArray.push(inputLetters);
                }
            }

        }
    }
}

var resultString = resultArray.join('').toUpperCase();

console.log(resultString);
