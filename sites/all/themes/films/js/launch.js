/*launch*/
/*
(function($){
	$(document).ready(function(){

	var $getBg = $('#range').css('background-image'),
				sp = $getBg.split('rgb');
				rangColor = $getBg.match(/(rgb\([\d\s,]*\)).*(rgb\([\d\s,]*\))/),
				rangPro	= $getBg.match(/((\d\W*\d\%))/g);
				console.log(rangPro);
		function speed(cur, min, max){
			var mid = (max-min)/2,
				dif = mid-cur;
			if(dif>0){
				cur = mid+dif;
				cur += min*2;
			}
			else if(dif<0) {
				cur = mid+dif;
				cur += min*2;
			}
			return cur;
		}
		var a = 0,
			set,
			obj = $('#range'),
			$getBg = $('#range').css('background-image'),
			$contrl = $('#controlRange'),
			rangColor = $getBg.match(/(rgb\([\d\s,]*\)).*(rgb\([\d\s,]*\))/),
			palette = {'1': rangColor[1] , '2': rangColor[2]};
		$('#btn').on('click', function(){
			clearInterval(set);
		});

		$contrl.on('change keydown', function(){
			time = speed($contrl.val(), $contrl.attr('min') , $contrl.attr('max'));
			if(set) {
				clearInterval(set);
			}
			set = setInterval(interval, (time = (time)? time : 1));
		});
		function rand(){
			var rand= Math.floor(Math.random() * (255 - 0 + 1)) + 0;;
			return rand;
		};
		var interval = function(){
			a += 2;
			if (a>=100) {
				a= 0;
				palette[2] = 'rgb('+rand()+','+rand()+','+rand()+')';
				palette[1] = 'rgb('+rand()+','+rand()+','+rand()+')';
				var color = palette[1];
				palette[2] = palette[1];
				palette[1] = 'rgb('+rand()+','+rand()+','+rand()+')';
			
			}

			obj.css('background-image', '-moz-linear-gradient(left, ' + palette[1] +' '+a+'%, ' + palette[2] +' '+a+'%)');
			console.log(a);
		};
	});
})(jQuery);	*/
