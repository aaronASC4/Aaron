function randWord(){
  var text = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 100; i++)
    text += letters.charAt(Math.floor(Math.random() * letters.length));

  return text;
}

console.log(randWord());

///

function randLetter(){
  var text = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";

    text += letters.charAt(Math.floor(Math.random() * letters.length));

  return text;
}

console.log(randLetter());

function randSentence(){
    var words = ["dog", "cat", "shore", "turtle", "eat", "destroy", "walk", "jog"];
    var punctuationEnd = "!.?";
    words.splice(Math.floor(Math.random() * 2), (Math.floor(Math.random()* 2), "by", "the"));

    return words;   

}
console.log(randSentence());