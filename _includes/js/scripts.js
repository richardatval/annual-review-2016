$(document).ready(function() {
	setTimeout(func, 1000);
	function func() {
		$('body').addClass('loaded');
	}
	$('.animation-wrap').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('is-in-view');
		} else {
		}
	});
	
	$('h1.title').fitText(0.84, { minFontSize: '75px' });
	$('h3.subtitle').fitText(1.6, { minFontSize: '30px' });
});

(function(jQuery) {
	jQuery.mark = {
		jump: function(options) {
			var defaults = {
				selector: 'a.scroll-on-page-link'
			};
			if (typeof options == 'string') {
				defaults.selector = options;
			}

			options = jQuery.extend(defaults, options);
			return jQuery(options.selector).click(function(e) {
				var jumpobj = jQuery(this);
				var target = jumpobj.attr('href');
				var thespeed = 1000;
				var offset = jQuery(target).offset().top;
				jQuery('html,body').animate({
					scrollTop: offset
				}, thespeed, 'swing');
				e.preventDefault();
			});
		}
	};
})(jQuery);


jQuery(function() {
	jQuery.mark.jump();
});

   google.charts.load("current", {packages:["corechart"]});
   google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
     var data = google.visualization.arrayToDataTable([
       ['Activity', 'Number recorded'],
       ['Funding', 50],
       ['Training', 14],
       ['Networking',  13],
       ['Governance', 11],
       ['Other',    11]
     ]);

     var options = {
       pieHole: 0.4,
	   backgroundColor: '#0088B3',
	   color: '#ffffff',
	   pieSliceText: 'label',
	   pieSliceTextStyle: {
	               color: '#fff',
                   bold: true,
				   fontSize: 14,
	             },
	   chartArea: {
	    top: 5,
		right: 5,
		left: 5,
		bottom: 5,
		width: '100%',
	   },
	   legend: {
	   	position: 'none',
		textStyle:  {
	        color: '#ffffff',
			bold: true,
	    },
	   },
	   pieSliceBorderColor: 'transparent',
	   colors: ['#2EAECB','#A0CEE0', '#72C3D8', '#A6D7E7', '#72C3D8', '#2EAECB']
     };

     var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
     chart.draw(data, options);
  }
  
  $(window).resize(function(){
    drawChart();
  });