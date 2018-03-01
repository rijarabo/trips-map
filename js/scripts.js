
// NYC Center
var centerMap =[40.754539,-73.995152];
var zoomMap= 14;
var map = L.map('my-map').setView(centerMap, zoomMap);

// map //

// L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>',
// 	subdomains: 'abcd',
// 	maxZoom: 19
// }).addTo(map);

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
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#242f3e'
      }
    ]
  },
  {
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#746855'
      }
    ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#242f3e'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.locality',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#d59563'
      }
    ]
  },
  {
    'featureType': 'administrative.neighborhood',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ffffff'
      }
    ]
  },
  {
    'featureType': 'poi',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#d59563'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#263c3f'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#6b9a76'
      }
    ]
  },
  {
    'featureType': 'road',
    'stylers': [
      {
        'color': '#ebebeb'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#38414e'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#ebebeb'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9ca5b3'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ebebeb'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#746855'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#ebebeb'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#ebebeb'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#f3d19c'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ebebeb'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'transit',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'transit',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#2f3948'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#d59563'
      }
    ]
  },
  {
    'featureType': 'water',
    'stylers': [
      {
        'color': '#000000'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#515c6d'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#17263c'
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
    radius: 3
  }
}) //.addTo(map);

// 12:00
var trips_0 = L.geoJson(var_00, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style,
  onEachFeature: onEachFeature
}).addTo(map);;

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

var overlay = {
	// 'Only stations':all,
	'12:00 am': trips_0,
	'1:00 am': trips_1,
	'2:00 am': trips_2,
	'3:00 am': trips_3,
	'4:00 am': trips_4,
	'5:00 am': trips_5,
	'6:00 am': trips_6,
	'7:00 am': trips_7,
	'8:00 am': trips_8,
	'9:00 am': trips_9,
	'10:00 am': trips_10,
	'11:00 am': trips_11,
	'12:00 pm': trips_12,
	'1:00 pm': trips_13,
	'2:00 pm': trips_14,
	'3:00 pm': trips_15,
	'4:00 pm': trips_16,
	'5:00 pm': trips_17,
	'6:00 pm': trips_18,
	'7:00 pm': trips_19,
	'8:00 pm': trips_20,
	'9:00 pm': trips_21,
	'10:00 pm': trips_22,
	'11:00 pm': trips_23,
};

L.control.layers(overlay,null,{collapsed:false}).addTo(map);

// **********************************
// COUNT VARIABLE                  //
// **********************************

// create a variable that counts from 0 to 24 and changes the text next to the hour//
// inspired in the first class fiddle : https://jsfiddle.net/fksjb4pe/

var count = 0;
var i     = 0;
var times = new Array (
                 // i
    '12:00 am',  // 0
    '1:00 am',   // 1
    '2:00 am',   // 2
    '3:00 am',   // 3
    '4:00 am',   // 4
    '5:00 am',   // 5
    '6:00 am',   // 6
    '7:00 am',   // 7
    '8:00 am',   // 8
    '9:00 am',   // 9
    '10:00 am',  // 10
    '11:00 am',  // 11
    '12:00 pm',  // 12
    '1:00 pm',   // 13
    '2:00 pm',   // 14
    '3:00 pm',   // 15
    '4:00 pm',   // 16
    '5:00 pm',   // 17
    '6:00 pm',   // 18
    '7:00 pm',   // 19
    '8:00 pm',   // 20
    '9:00 pm',   // 21
    '10:00 pm',  // 22
    '11:00 pm'   // 23
  );

$('.StartButton').click(function() {
  if (i <= 22) {
    i += 1;
    count = count + 1;
    }
  else {
    i = 0
    count = 0;
     }
  $('.HourCount').text(times[i])
})
