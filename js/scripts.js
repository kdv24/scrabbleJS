function scrabble(word) {

    var values = {
        '1' : ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        '2' : ['d', 'g']
    }

    var arrayWord = word.split('');

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
                    } else {
                        total += 0;
                    }

                }
            }
        }
    }


    return total;
}


// switch (values) {
//
//     case (word === score[letter]):
//         total+=1;
//         break;
