# Password-Generator-API
A Password API where you can combine and make more secure passwords. 


Download it then import it into your html document with a variation of this:

<script src="js/WordsAPI.js"></script>
<br><br>

The API currently has 6 function(s) with 3 complete:


    FormatList(wordlist):
        takes a list and formats it to be better used in the other functions
        Should be called by all of them
  
        Example: FormatList(wordlist);
            formats the wordlist with NO return


    createPassWords(wordlist):
        takes a list and combines it.
  
        Example: createPassWords(wordlist);
            returns a new word from all the words it was given

    
    randomizeCasing(wordlist):
        takes a list randomizes the casing in each individual word.
  
        Example: randomizeCasing(wordlist);
            Modified Wordlist NOT returned, but the orgininal is modified.
            

    TODOs:
    //Three of the below
    createPassSpecial*(wordlist):
        takes a wordlist and substitutes in a variety of L337 SP34K Characters
        Currently 3 functions of varying L33T.
            

