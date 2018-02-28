
// NYC Center
var centerMap =[40.737633,-73.961334];
var zoomMap= 12;
var map = L.map('my-map').setView(centerMap, zoomMap);

// map //

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
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
var ColorArray 		= ['#DC143C','#32CD32','#FFFFFF','#C0C0C0'];
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
    fillOpacity: 0.5,
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

// 12:00
var trips_00 = L.geoJson(var_00, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 1:00
var trips_01 = L.geoJson(var_01, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 2:00
var trips_02 = L.geoJson(var_02, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 3:00
var trips_03 = L.geoJson(var_03, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 4:00
var trips_04 = L.geoJson(var_04, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 5:00
var trips_05 = L.geoJson(var_05, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 6:00
var trips_06 = L.geoJson(var_06, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 7:00
var trips_07 = L.geoJson(var_07, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 8:00
var trips_08 = L.geoJson(var_08, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 9:00
var trips_09 = L.geoJson(var_09, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 10:00
var trips_10 = L.geoJson(var_10, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 11:00
var trips_11 = L.geoJson(var_11, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 12:00
var trips_12 = L.geoJson(var_12, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 13:00
var trips_13 = L.geoJson(var_13, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 14:00
var trips_14 = L.geoJson(var_14, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 15:00
var trips_15 = L.geoJson(var_15, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 16:00
var trips_16 = L.geoJson(var_16, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 17:00
var trips_17 = L.geoJson(var_17, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 18:00
var trips_18 = L.geoJson(var_18, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 19:00
var trips_19 = L.geoJson(var_19, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 20:00
var trips_20 = L.geoJson(var_20, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 21:00
var trips_21 = L.geoJson(var_21, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 22:00
var trips_22 = L.geoJson(var_22, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);

// 23:00
var trips_23 = L.geoJson(var_23, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: Style, // EndStyle property calls "style" object defined above
  onEachFeature: onEachFeature // onEachFeature property calls "onEachFeature" function defined above
}).addTo(map);


// **********************************
// LAYER CONTROL                   //
// **********************************

var overlay = {
	"12:00 am": trips_00,
	"1:00 am": trips_01,
	"2:00 am": trips_02,
	"3:00 am": trips_03,
	"4:00 am": trips_04,
	"5:00 am": trips_05,
	"6:00 am": trips_06,
	"7:00 am": trips_07,
	"8:00 am": trips_08,
	"9:00 am": trips_09,
	"10:00 am": trips_10,
	"11:00 am": trips_11,
	"12:00 pm": trips_12,
	"1:00 pm": trips_13,
	"2:00 pm": trips_14,
	"3:00 pm": trips_15,
	"4:00 pm": trips_16,
	"5:00 pm": trips_17,
	"6:00 pm": trips_18,
	"7:00 pm": trips_19,
	"8:00 pm": trips_20,
	"9:00 pm": trips_21,
	"10:00 pm": trips_22,
	"11:00 pm": trips_23,
};

L.control.layers(overlay,null,{collapsed:false}).addTo(map);
