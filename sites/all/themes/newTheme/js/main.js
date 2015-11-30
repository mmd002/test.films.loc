(function($){
	$(document).ready(function(){
		//add iframe in modal
		$('.myModal').on('click',function(e){
			var $src = $(this).parent().siblings().text().split('?v=');
			$('.modal-body').append('<iframe width="640" height="360" src="https://www.youtube.com/embed/'+$src[1]+'?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>');
		})
		//remove iframe in modal
		$('#close, .close, #myModal').click(function(){
			setTimeout(function() {
			  $('iframe').remove();
			}, 1000);
		});
		//zoom
		var $fontSize = +$('body').css('font-size').replace("px",'');
		
		$('#zoom_p').on('click',function(){
			$('body').css('font-size' , ++$fontSize);
		});

		$('#zoom_m').on('click', function(){
			$('body').css('font-size' , --$fontSize);
		});

		$('#zoom_r').on('click', function(){
			$('body').css('font-size' , '14px');
		});

		/*paralax*/
		var img = $('.wrap-img-info img').clone(), 
		sr;
		$('.parallax').append(img);
		$(window).scroll(function(){
			sr = $(this).scrollTop();
			$('.parallax > img').css({
					'transform' : 'translate(0, -'+sr+'px)',
						});
		});

		/* mario */
		$('#button').on('click', function() {
			$('.mario').addClass('run');
			setTimeout(function(){
				$('.run').remove();
			}, 5000);
		});

		/*load*/
		$('#load').on('click', function(){
			/*$('.load').toggle();*/
			$('.load').toggleClass('active');

		});

		var range = document.createElement('input');
		range.setAttribute('type', 'range');
		range.setAttribute('min', '0');
		range.setAttribute('max', '100');
		range.setAttribute('step', '1');
		range.setAttribute('id', 'range');
		$('.wrap-range').html(range);
		
		$('#range').on('change keydown click mousemove', function(){
		var targ = $('#range'),	
		 	val = targ.attr('value');
			console.log(targ.css());
		});
	});
}(jQuery));
