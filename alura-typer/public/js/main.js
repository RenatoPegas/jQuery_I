var field = $('.character-field');
var initialTime = $('#game-count').text();           //initial time

$(document).ready(function(){                        //execute when a page will be loaded
   updateWordSize();
   initializeCounts();
   initializeCronometer();
   initializeMark();
   $('#btn-restart').click(restartGame);
});

function updateWordSize() {

   var word = $('.sentence').text();                //$ = jQuery;
   var wordNumber = word.split(/\S+/).length;       //split function separate the string by parameter inserted
   var wordSize = $('#size-number');                //alloc the length
   wordSize.text(wordNumber);                       //show length of sentence

}

function initializeCounts() {

   field.on('input', function () {                  //function of character and word count

      var content = field.val();                    //val = value in jQuery

      var characters = content.length;
      $('#character-count').text(characters);

      var words = content.split(/\S+/).length - 1;  // /\S+/ = RegEx
      $('#word-count').text(words);

   });
}

function initializeCronometer() {                   //function of game count

   var gameTime = $('#game-count').text();

   field.one('focus', function () {                 

      $("#btn-restart").attr("disabled", true);     //disable restart button

      var chonometerID = setInterval(function () {
         gameTime--;
         $('#game-count').text(gameTime);
         if (gameTime < 1) {
            field.attr('disabled', true);
            clearInterval(chonometerID);
            field.addClass('character-field-disable');
            $("#btn-restart").attr("disabled", false); //able chronometer
         }
      }, 1000);

   });
}
function initializeMark(){

   var sentence = $('.sentence').text();

   field.on('input', function(){

      var textValue = field.val();
      var compare = sentence.substr(0, textValue.length);     //compare with a part of sentence 
      
      if(textValue == compare){
         field.addClass('correct-border');
         field.removeClass('error-border');
      }else{
         field.addClass('error-border');
         field.removeClass('correct-border');
      }

   });
}

function restartGame() {
   field.attr('disabled', false);
   field.val("");
   $('#word-count').text('0');
   $('#character-count').text('0');
   
   $('#game-count').text(initialTime);                //reinicialize count
   initializeCronometer();
   field.removeClass('character-field-disable');
   field.removeClass('correct-border');
   field.removeClass('error-border');
}



// console.log();