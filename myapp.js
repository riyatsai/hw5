/*
Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.
http://darkskyapp.github.io/skycons/
*/
var skycons = new Skycons();
  // on Android, a nasty hack is needed: {"resizeClear": true}

  // you can add a canvas by it's ID...
  skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("day1", Skycons.CLEAR_DAY);
  skycons.add("day2", Skycons.CLOUDY);
  skycons.add("day3", Skycons.RAIN);

  // start animation!
  skycons.play();
  
  // want to change the icon? no problem:
  skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
  
/*
Get value from Bootstrap dropdown menu
*/
   
$('#dropdown li').on('click', function(){
    //alert($(this).text());
	$('.dropdown-toggle').html($(this).text()+'  <span class="caret"></span>');
	var city=$(this).text();
	       $.ajax('https://query.yahooapis.com/v1/public/yql', {
	         method: 'GET',
	         data: {
	           q: 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '")',
	           format: 'json'
	         },
	         success: function (data) {
				 var weatherInfo = data.query.results.channel;
	             // var cityMatch = 'It seems ' + weatherInfo.item.condition.text.toLowerCase()+' in '+ weatherInfo.location.city + ', ' + weatherInfo.location.country
				 console.log(weatherInfo);
	             $('.temperature').text(((weatherInfo.item.condition.temp-32)*5/9).toFixed(2));
	             $('.condition').text(weatherInfo.item.forecast[0].date);
				 // $('.date').text(weatherInfo.item.forecast.0.date);
				 // $('.date1').text(weatherInfo.item.forecast.1.date);
				 // $('.date2').text(weatherInfo.item.forecast.2.date);
				 // $('.date3').text(weatherInfo.item.forecast.3.date);
				 
				 
	         }
	       });
});




