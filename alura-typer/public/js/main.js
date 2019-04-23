var initialTime = $('#game-count').text();     //initial time

$(document).ready(function(){
   updateWordSize();
   initializeCounts();
   initializeCronometer();
   $('#btn-restart').click(restartGame);
});

function updateWordSize() {

   var word = $('.sentence').text();              //$ = jQuery;
   var wordNumber = word.split(/\S+/).length;     //split function separate the string by parameter inserted
   var wordSize = $('#size-number');              //alloc the length
   wordSize.text(wordNumber);                     //show length of sentence

}

var field = $('.character-field');

function initializeCounts() {

   field.on('input', function () {                  //function of character and word count

      var content = field.val();                  //val = value in jQuery

      var characters = content.length;
      $('#character-count').text(characters);

      var words = content.split(/\S+/).length - 1; // /\S+/ = RegEx
      $('#word-count').text(words);

   });
}

function initializeCronometer() {

   var gameTime = $('#game-count').text();

   field.one('focus', function () {                  //function of game count

      var chonometerID = setInterval(function () {
         gameTime--;
         $('#game-count').text(gameTime);
         if (gameTime < 1) {
            field.attr('disabled', true);
            clearInterval(chonometerID);
         }
      }, 1000);

   });
}

// $('#btn-restart').on('click', function(){ });


function restartGame() {
   field.attr('disabled', false);
   field.val("");
   $('#word-count').text('0');
   $('#character-count').text('0');
   initializeCronometer();
}



// console.log();