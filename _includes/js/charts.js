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