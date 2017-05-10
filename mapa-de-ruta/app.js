(function() {
	console.log('HERE')
  mapboxgl.accessToken = 'pk.eyJ1IjoicGFibG92YWxsZWpvIiwiYSI6ImNpdjU1OHhkYzAxM3oyem55NnoxeWxuZXgifQ.ASHXXLrQFb7uauLJ0c8qAg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
  });

})();
