// $(document).ready(function() {
//     $(thingToClick).event(function() {
//         $(thingToAffect).effect();
//     });
// });

$(document).ready(function() {
    $('#button1').click(function() {
        console.log('a message');
        var square = $('<div>');
        square.css('backgroundColor','skyblue');
        $('body').append(square); 
    });
    $('form')

    $('p').mouseover(function() {
    	$( this ).css( 'color','pink' );
	});

    $( 'h2' ).append( '!' );

    $('a').click(function() {
    	con = confirm("Continue?");
    	console.log(con);
 
    	if(con === false) {
    		$(this).remove();
    		return false;
    	}
    });

});

