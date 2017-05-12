(function() {

  mapboxgl.accessToken = 'pk.eyJ1IjoicGFibG92YWxsZWpvIiwiYSI6ImNpdjU1OHhkYzAxM3oyem55NnoxeWxuZXgifQ.ASHXXLrQFb7uauLJ0c8qAg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15
  });

  map.setCenter([-74.0720920, 4.7109890]);

  map.on('load', function () {

	   // Add driver icon.
	   map.addSource('point', {
	      "type": "geojson",
	      "data": {
	          "type": "Point",
	          "coordinates": [
	              -74.0720920, 4.7109890
	          ]
	      }
	   });

	   map.addLayer({
	     "id": "point",
	     "source": "point",
	     "type": "circle",
	     "paint": {
	        "circle-radius": 6,
	          "circle-radius-transition": {duration: 0},
	          "circle-opacity-transition": {duration: 0},
	          "circle-color": "#007cbf"
	      }
	  });

	  map.addLayer({
	      "id": "point1",
	      "source": "point",
	      "type": "circle",
	      "paint": {
	          "circle-radius": 6,
	          "circle-color": "#007cbf"
	      }
	  });

  });

})();
