var word = $('.sentence').text();              //$ = jQuery;
var wordNumber = word.split(/\S+/).length;     //split function separate the string by parameter inserted
var wordSize = $('#size-number');              //alloc the length

wordSize.text(wordNumber);                     //show length of sentence

var field = $('.character-field');

field.on('input', function(){                  //function of character and word count

   var content = field.val();                  //val = value in jQuery

   var characters = content.length;
   $('#character-count').text(characters);

   var words = content.split(/\S+/).length -1; // /\S+/ = RegEx
   $('#word-count').text(words);
   
});

var gameTime = $('#game-count').text();

field.one('focus', function(){                  //function of game count
   
   var chonometerID = setInterval(function(){
      gameTime--;
      $('#game-count').text(gameTime);
      if(gameTime < 1){
         field.attr('disabled', true);
         clearInterval(chonometerID);
      }
   },1000);

});

// console.log();