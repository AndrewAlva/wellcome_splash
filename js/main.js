jQuery(document).ready(function($) {
	// console.log("I'm ready sir");


	// INTRODUCTION AFTER-LOAD ANIMATION
	$(window).bind("load", function() {
		$introElements = $('._a_fadeIn-up').length;

		$.each($('._a_fadeIn-up'), function(index, el) {
			setTimeout(function(){
				$(el).removeClass('_a_fadeIn-up');

				if ((index + 1) == $introElements) {
					setTimeout(function(){
						$('#firstBlock').removeClass('_a_fullWidth');
						// console.log("I'm done sir");

						$.each($("._a_fadeIn-down-blocks").get().reverse(), function(index, el) {
							setTimeout(function(){
								$(el).removeClass('_a_fadeIn-down-blocks');

							}, ((index * 150) + 300));
						});

					}, (index * 300));
				};
		    }, ( index * 100 ));
		});
	});

	// COLOUR ANIMATION
	colourTextArrays = ["redText", "blueText", "yellowText", "greenText"];
	indexTextArray = 0;

	setInterval(function(){
		indexTextArray += 1;
		
		if (indexTextArray == (colourTextArrays.length - 1)) {
			indexTextArray = 0;
			$('#wellcomeMail').find('a').addClass(colourTextArrays[indexTextArray]);
			$('#wellcomeMail').find('a').removeClass(colourTextArrays[(colourTextArrays.length - 1)]);

		} else{
			$('#wellcomeMail').find('a').addClass(colourTextArrays[indexTextArray]);
			$('#wellcomeMail').find('a').removeClass(colourTextArrays[(colourTextArrays.length - 1)]);
		};


	}, 1000);


});