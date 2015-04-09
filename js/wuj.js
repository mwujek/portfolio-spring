/*jshint devel:true */

$(document).ready(function(){

	$('div').each(function(index, item){
		if (index !== 0){
			$(this).velocity({width:0},{duration:600});
		}
		$(this).data({active:false});
		//$(this).css({'border-left-width' : '5px'});
		$(this).click(function(event){
			event.stopPropagation();
			var children = $(this).find('div');

		//    console.log($(this).attr('class'));
		if( $(this).data('active') === false){
			$(this).velocity({width:'100%'},{duration:600});
			$(this).css({'border-left-width' : '5px'});
			$(this).data({active:true});
			jQuery.each(children, function(index, item) {
				var el = $(this);
				el.velocity({width:'100%'},{duration:600});
				el.data({active:true});
				el.css({'border-left-width' : '5px'});
				console.log(index);
			});
		} else{
			$(this).velocity({width:0},{duration:300});
			$(this).data({active:false});
			$(this).css({'border-left-width' : '0px'});
			jQuery.each(children, function(index, item) {
				var el = $(this);
    				el.velocity({width:0},{duration:600});
    				el.data({active:true});
    				el.css({'border-left-width' : '0px'});
			});
		}
		});
	});

});