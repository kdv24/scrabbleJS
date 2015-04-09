function scrabble(word) {

    var values = {
        '1' : ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        '2' : ['d', 'g'],
        '3' : ['b', 'c', 'm', 'p'],
        '4' : ['f', 'h', 'v', 'w', 'y'],
        '5' : ['k'],
        '8' : ['j', 'x'],
        '10': ['q', 'z']
    }

    //control for capitalization by making lower and splitting into array...
    var arrayWord = word.toLowerCase().split('');

    var total = 0;


    // For each letter in our word array...
    for (var wordLetter in arrayWord) {
        // for each property in values object...
        for (var key in values) {
            // if that property exists...
            if (values.hasOwnProperty(key)) {
                // rename that key to variable score (for ease of code)...
                var score = values[key];
                // for each character in the array associated with the key (or score)...
                for (var letter in score) {
                    //
                    if ((key === '1') && (arrayWord[wordLetter] === score[letter])) {
                        total += 1;
                    } else if ((key === '2') && (arrayWord[wordLetter] === score[letter])) {
                        total += 2;
                    } else if ((key === '3') && (arrayWord[wordLetter] === score[letter])) {
                        total += 3;
                    } else if ((key === '4') && (arrayWord[wordLetter] === score[letter])) {
                        total += 4;
                    } else if ((key === '5') && (arrayWord[wordLetter] === score[letter])) {
                        total += 5;
                    } else if ((key === '8') && (arrayWord[wordLetter] === score[letter])) {
                        total += 8;
                    } else if ((key === '10') && (arrayWord[wordLetter] === score[letter])) {
                        total += 10;
                    } else {
                        total += 0;
                    }

                }
            }
        }
    }


    return total;
}

$(document).ready(function() {

    $('form#word-form').submit(function(event) {
        var input = $('input#word-input').val();
        var result = scrabble(input);

        alert("\"" + input + "\"" + " scrabblates to " + result);

        event.preventDefault();

    });



});
