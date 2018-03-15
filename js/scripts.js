// START Modal
$(window).on('load',function(){
    $('#StartModalLong').modal('show');
});

// NYC Center
var centerMap =[40.754539,-73.995152];
var zoomMap= 14;
var map = L.map('my-map').setView(centerMap, zoomMap);
//var graph =

// map //

// Tutorial to add google layers and style:
// https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
// style google map:
// https://developers.google.com/maps/documentation/javascript/styling
// https://mapstyle.withgoogle.com/

var googlestyle = L.gridLayer.googleMutant({
    type: 'roadmap',
    styles:
    [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
}).addTo(map);

// http://fiddle.jshell.net/260hffor/30/
// http://dwilhelm89.github.io/LeafletSlider/

// **********************************
// define arrays of style options //
// **********************************

// the radius depends on the total number of trips of each station at any give hour

// the color will depend on the display property of each station.
// I gave this display property when cleaning the data.
		// display = start --> at any given hour, more trips started at that station
		// display = end   --> at any given hour, more trips ended at that station
		// display = same  --> at any given hour, the same amount of trips started and ended at that station

var TotTripsArray = [100,        50,       20,       10,       5,        0];
var radiusArray   = [25,         20,       15,       10,       5,        3];
var ColorArray 		= ['#DC143C','#32CD32','#C0C0C0','#FFF'];
var DisplayArray 	= ['start','end','same'];

const getColor = function(display) {
  switch(display) {
    case 'start':   return {color: ColorArray[0]};
    case 'end'  :   return {color: ColorArray[1]};
    case 'same' :   return {color: ColorArray[2]};
  }
}

function getTotRadius(trips) {
  return trips = null ? 0:                          //  no trps
         trips >TotTripsArray[0] ? radiusArray[0] : // more than 100 trips
         trips >TotTripsArray[1] ? radiusArray[1] : // more than 50 trips
         trips >TotTripsArray[2] ? radiusArray[2] : // more than 20 trips
         trips >TotTripsArray[3] ? radiusArray[3] : // more than 10 trips
         trips >TotTripsArray[4] ? radiusArray[4] : // more than 5 trips
              radiusArray[5] ;                      // more than 0
}

function Style(feature) {
  return {
    weight: 0,
    opacity: 1,
    fillOpacity: 0.6,
    fillColor: getColor(feature.properties.display).color,
    radius: getTotRadius(feature.properties.total_trips_hour)
  };
}

function onEachFeature (feature,layer) {
  var popup=layer.bindPopup(`
    <b style='font-size: 120%'>Hour:</b> ${feature.properties.hour}<br/>
    <b style='font-size: 120%'>Total trips:</b> ${feature.properties.total_trips_hour}
  `)
}

// **********************************
// ADD LAYERS                      //
// **********************************

// DATA DOWNLOADED FROM:
// citibikenyc.com/system-data

// Only Stations
var all = L.geoJson(var_00, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: {
    weight: 0,
    opacity: 1,
    fillOpacity: 0.8,
    fillColor: '#0000CD',
    radius: 2
  }
}).addTo(map);

// 12:00
var trips_0 = L.geoJson(var_00, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
})//.addTo(map);

// 1:00
var trips_1 = L.geoJson(var_01, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 2:00
var trips_2 = L.geoJson(var_02, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 3:00
var trips_3 = L.geoJson(var_03, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 4:00
var trips_4 = L.geoJson(var_04, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 5:00
var trips_5 = L.geoJson(var_05, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 6:00
var trips_6 = L.geoJson(var_06, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 7:00
var trips_7 = L.geoJson(var_07, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 8:00
var trips_8 = L.geoJson(var_08, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 9:00
var trips_9 = L.geoJson(var_09, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 10:00
var trips_10 = L.geoJson(var_10, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 11:00
var trips_11 = L.geoJson(var_11, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 12:00
var trips_12 = L.geoJson(var_12, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 13:00
var trips_13 = L.geoJson(var_13, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 14:00
var trips_14 = L.geoJson(var_14, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 15:00
var trips_15 = L.geoJson(var_15, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 16:00
var trips_16 = L.geoJson(var_16, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 17:00
var trips_17 = L.geoJson(var_17, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 18:00
var trips_18 = L.geoJson(var_18, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 19:00
var trips_19 = L.geoJson(var_19, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 20:00
var trips_20 = L.geoJson(var_20, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 21:00
var trips_21 = L.geoJson(var_21, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 22:00
var trips_22 = L.geoJson(var_22, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});

// 23:00
var trips_23 = L.geoJson(var_23, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
});


// **********************************
// LAYER CONTROL                   //
// **********************************

var overlayArray = {
	// 'Only stations':all,
	'12:00 am - 12:59 am': trips_0,
	'1:00 am - 1:59 am': trips_1,
	'2:00 am - 2:59 am': trips_2,
	'3:00 am - 3:59 am': trips_3,
	'4:00 am - 4:59 am': trips_4,
	'5:00 am - 5:59 am': trips_5,
	'6:00 am - 6:59 am': trips_6,
	'7:00 am - 7:59 am': trips_7,
	'8:00 am - 8:59 am': trips_8,
	'9:00 am - 9:59 am': trips_9,
	'10:00 am - 10:59 am': trips_10,
	'11:00 am - 11:59 am': trips_11,
	'12:00 pm - 12:59 pm': trips_12,
	'1:00 pm - 1:59 pm': trips_13,
	'2:00 pm - 2:59 pm': trips_14,
	'3:00 pm - 3:59 pm': trips_15,
	'4:00 pm - 4:59 pm': trips_16,
	'5:00 pm - 5:59 pm': trips_17,
	'6:00 pm - 6:59 pm': trips_18,
	'7:00 pm - 7:59 pm': trips_19,
	'8:00 pm - 8:59 pm': trips_20,
	'9:00 pm - 9:59 pm': trips_21,
	'10:00 pm - 10:59 pm': trips_22,
	'11:00 pm - 11:59 pm': trips_23,
};

L.control.layers(overlayArray,null,{collapsed:false}).addTo(map);

// **********************************
// PLAY ARRAY                      //
// **********************************

var layersArray = [
    all,
    trips_0,
    trips_1,
    trips_2,
    trips_3,
    trips_4,
    trips_5,
    trips_6,
    trips_7,
    trips_8,
    trips_9,
    trips_10,
    trips_11,
    trips_12,
    trips_13,
    trips_14,
    trips_15,
    trips_16,
    trips_17,
    trips_18,
    trips_19,
    trips_20,
    trips_21,
    trips_22,
    trips_23,
];

var count = -1;
var i     = -1;
var timer;

function timeoutFunction() {
    timer=setTimeout(changeLayerFunc, 0);
}

function changeLayerFunc() {
  if (i <= 22) {
    i += 1;
    count = count + 1;
    map.removeLayer(layersArray[i]);
    map.addLayer(layersArray[i+1]);
    }
  else {
    i = -1
    count = -1;
    }
}
function repeatFunc() {
  if (i <= 22) timeoutFunction()
}

function stopFunction() {
      this.eachLayer(function (layer) {
        this.removeLayer(layer);
      }, this)
  map.addLayer(all);
}




$('.StartButton').click(timeoutFunction,repeatFunc);
$('.StopButton').click(stopFunction);


// http://www.chartjs.org/docs/latest/

// var timer = setTimeout(function {
//   // remove all layers
//   layersArray.forEach(function(layer) {
//     map.removeLayer(layer)
//     map.addLayer(layersArray['layer' + i])
//   })
//   i++;
//
//
//   if (i < layersArray.length) timer();
// }, 1000)

// function removeallfunction(){
//   map.removeLayer(all)
// }

// function changeLayerFunc() {
//   // remove all layers
//     layersArray.forEach(function(layer) {
//       map.removeLayer(layer),
//       map.addLayer(layersArray['layer' + i])}
//     )
// }

  // i++;
  // if (i < layersArray.length) timer();
// };

// $('.StartButton').click(function() {
//   if (i <= 22) {
//     i += 1;
//     count = count + 1;
//     }
//   else {
//     i = 0
//     count = 0;
//      }
//   $('.HourCount').text(times[i])
// });

// **********************************
// COUNT VARIABLE                  //
// **********************************

// // create a variable that counts from 0 to 24 and changes the text next to the hour//
// // inspired in the first class fiddle : https://jsfiddle.net/fksjb4pe/
//
// var count = 0;
// var i     = 0;
// var times = new Array (
//                  // i
//         '12:00 am - 12:59 am',
//        	'1:00 am - 1:59 am',
//        	'2:00 am - 2:59 am',
//        	'3:00 am - 3:59 am',
//        	'4:00 am - 4:59 am',
//        	'5:00 am - 5:59 am',
//        	'6:00 am - 6:59 am',
//        	'7:00 am - 7:59 am',
//        	'8:00 am - 8:59 am',
//        	'9:00 am - 9:59 am',
//        	'10:00 am - 10:59 am',
//        	'11:00 am - 11:59 am',
//        	'12:00 pm - 12:59 pm',
//        	'1:00 pm - 1:59 pm',
//        	'2:00 pm - 2:59 pm',
//        	'3:00 pm - 3:59 pm',
//        	'4:00 pm - 4:59 pm',
//        	'5:00 pm - 5:59 pm',
//        	'6:00 pm - 6:59 pm',
//        	'7:00 pm - 7:59 pm',
//        	'8:00 pm - 8:59 pm',
//        	'9:00 pm - 9:59 pm',
//        	'10:00 pm - 10:59 pm',
//        	'11:00 pm - 11:59 pm',
//   );
//
//
// $('.StartButton').click(function() {
//   if (i <= 22) {
//     i += 1;
//     count = count + 1;
//     }
//   else {
//     i = 0
//     count = 0;
//      }
//   $('.HourCount').text(times[i])
// })
