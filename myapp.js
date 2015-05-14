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
	             var cityMatch = 'It seems ' + weatherInfo.item.condition.text.toLowerCase()+' in '+ weatherInfo.location.city + ', ' + weatherInfo.location.country

			   console.log(weatherInfo);
	           $('.temperature').text(((weatherInfo.item.condition.temp-32)*5/9).toFixed(2));
			   //console.log(cityMatch);
			   //console.log(nocity);
	         }
	       });
});




// $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202306180&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',{},function(json) {
//   var w_code = weather_con[json.query.results.channel.item.condition.code.toString()];
//   var w_temp = Math.round((json.query.results.channel.item.condition.temp - 32)*5/9) + "℃";
//   console.log(json);
//   console.log(w_code);
//   console.log(w_temp);
// });
// $('#test').text(w_temp);