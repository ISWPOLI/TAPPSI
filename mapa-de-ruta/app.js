(function() {

  mapboxgl.accessToken = 'pk.eyJ1IjoicGFibG92YWxsZWpvIiwiYSI6ImNpdjU1OHhkYzAxM3oyem55NnoxeWxuZXgifQ.ASHXXLrQFb7uauLJ0c8qAg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15
  });
	
  var points = [
    -74.0720920, 4.7109897,
    -74.0720128, 4.7109891,
    -74.0720225, 4.7109892,
    -74.0720328, 4.7109895,
    -74.0720425, 4.7109893,
    -74.0720550, 4.7109899
  ];

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
