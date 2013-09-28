$(document).ready(function() {
    $('#button').click(function() {
        var popup = $('<div id="popup">You have been advertised at.</div>');
        $('body').append(popup); 
        
        var x = $('<div class="x">X</div>')
        $(popup).append(x);

        $(x).click(function() {
        	$(popup).remove();
        });


    });
});
