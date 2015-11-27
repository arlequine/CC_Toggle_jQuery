//it toggles the navigation bar
$(document).ready(function(){

	$(".flip").click(function(){
		//it gets value
		var open = $('.logo').attr('value');
		//it evaluates value of 'open' variable
		console.log(open)
		if (open === "closed" ){
			//it animates 'nav' open to lef
			//it changes css value of 'nav' class
			$('nav').animate({left: '+=155'});
			//it changes css value of 'header' class	
			$('header').animate({left: '+=180'});
			//it changes css value of 'content' class
			$('#content').animate({left: '+=180'});
			//it changes css value of 'footer' class
			$('.footer').animate({left: '+=180'});
			//it changes css value of 'barra_vertical' class			
			$('.barra_vertical').css('visivility', 'visible');
			//it animates 'logo class' 
			$('.logo').animate({left: '+=155'})
			//it changes 'open' value for attribute 'value' 
			$('.logo').attr("value", "open");
			//$('.logo').hide() //it 'hide' img
			//$('.panel').show() //it 'show' img
		}else {
			//$('.logo').show() //it show 'show' img
			//$('.panel').hide() //it hide 'hide' img
			//it animates 'nav' close to lef
			$('nav').animate({left: '-=155'});
			//it changes css value of 'header' class
			$('header').animate({left: '-=180'});
			//it changes css value of 'content' class
			$('#content').animate({left: '-=180'});
			//it changes css value of 'footer' class
			$('.footer').animate({left: '-=180'});	
			//it changes css value of 'barra_vertical' class					
			$('.barra_vertical').css('visivility', 'visible');
			//it animates 'logo class' 
			$('.logo').animate({left: '+=155'})
			//it changes 'open' value for attribute 'value' 
			$('.logo').attr("value", "closed");
		}	
		
	});
});