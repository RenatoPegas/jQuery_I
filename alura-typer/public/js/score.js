function scoreInsert() {

    var tableBody = $('.score').find('tbody');
    var user = 'Renato';
    var wordNumber = $('#word-count').text();

    var line = newLine(user, wordNumber);
    line.find('.remove-button').click(removeLine);

    tableBody.append(line);

}

function newLine(user, wordNumber) {

    var line = $('<tr>');
    var userCollum = $('<td>').text(user);
    var wordCollum = $('<td>').text(wordNumber);
    var removeCollum = $('<td>');

    var link = $('<a>').addClass('remove-button').attr('href', '#');
    var icon = $('<i>').addClass('material-icons').text('delete');

    link.append(icon);
    removeCollum.append(link);
    line.append(userCollum);
    line.append(wordCollum);
    line.append(removeCollum);

    return line;
}

function removeLine() {

    event.preventDefault();                             //stop default events on page
    $(this).parent().parent().remove();                 //envolve the element in jQuery

}