//97-122

/* https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//Takes a wordlist (array) and formats it before putting it through password creation
function formatList(wordlist) {
    for(var i = 0; i < wordlist.length; i++) {
        if(wordlist[i]) {
            wordlist[i] = String(wordlist[i]);
            wordlist[i] = wordlist[i].substring(0, 1).toUpperCase() + wordlist[i].substring(1, wordlist[i].length).toLowerCase();
        }
    }
}

//Takes multiple words (array) and combines them in the order received
function createPassWords(wordlist) {
    formatList(wordlist);
    var word = "";
    wordlist.forEach(function(e) { word = word + e;})
    return word;
}


/*
 *
 * The next three functions are going to be massive ladders and I'm not going to do that because I'm sure I'll find a better way to do it.
 * For Right Now they are still TODO:
 *
 */

//Substitutes in L33T SP34K for all characters
//Takes multiple words (array) and combines them in the order received
function createPassSpecialAll(wordlist) {
    
}

//Substitutes in L33T SP34K for most characters
//Takes multiple words (array) and combines them in the order received
function createPassSpecialMost(wordlist) {
    
}

//Substitutes in L33T SP34K for some characters
//Takes multiple words (array) and combines them in the order received
function createPassSpecialSome(wordlist) {
    
}

//changes the Uppercasing and lowercasing randomly on one string (Default should be each word)
function randomizeCasing(wordlist) {
    formatList(wordlist);
    for(var i = 0; i < wordlist.length; i++) {
        charArray = wordlist[i].split('');
        for(var j = 0; j < charArray.length; j++) {
            var num = Math.round(getRandomArbitrary(0, 1));
            if(num === 0) {
                charArray[j] = charArray[j].toUpperCase();
            }
            if(num == 1) {
                charArray[j] = charArray[j].toLowerCase();
            }
        }
        wordlist[i] = charArray.join('');
    }
}
