$(document).ready(function() {
			// Show or hide the sticky footer button
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				//event.preventDefault();
				
				$('html, body').animate({scrollTop: 100},"slow");
				return false;
			})
		});