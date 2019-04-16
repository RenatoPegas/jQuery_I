var word = $('.sentence').text();  //$ = jQuery;
var wordNumber = word.split(" ").length; //split function separate the string by parameter inserted
var wordSize = $('#size-number'); //alloc the length

wordSize.text(wordNumber); //show length of sentence

//  console.log(wordSize);