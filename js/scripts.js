function scrabble(word) {



    var values = {
        '1' : ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        '2' : ['d', 'g']
    }

    var total = 0;

    console.log(word);

    for (var key in values) {
        if (values.hasOwnProperty(key)) {
            var score = values[key];
            for (var letter in score) {
                if (word === score[letter]) {
                    total += 1;
                }
            }
        }
    }

    console.log(values);
    console.log(total);

    return total;
}
