// START Modal
$(window).on('load',function(){
    $('#StartModalLong').modal('show');
});

// NYC Center
var centerMap =[40.747582,-73.962193];
var zoomMap= 13;
var map = L.map('my-map').setView(centerMap, zoomMap);

// **********************************
//                MAP              //
// **********************************

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
        'color': '#f5f5f5'
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
    'elementType': 'labels.icon',
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
        'color': '#616161'
      }
    ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#f5f5f5'
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
    'featureType': 'administrative.land_parcel',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#bdbdbd'
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
    'featureType': 'poi',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#eeeeee'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e5e5e5'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ffffff'
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
    'featureType': 'road.arterial',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dadada'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#616161'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
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
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e5e5e5'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#eeeeee'
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
        'color': '#9e9e9e'
      }
    ]
  }
]
}).addTo(map);

// **********************************
// Define arrays of style options //
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

function getColor (display) {
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

function TotStyle(feature) {
  return {
    weight: 0,
    opacity: 1,
    fillOpacity: 1,
    fillColor: '#0000CD',
    radius: 2,
  };
}

function onEachFeature (feature,layer) {
  var popup=layer.bindPopup(`
    <b style='font-size: 120%'>Station:</b> ${feature.properties.station}<br/>
    <b style='font-size: 120%'>Trips between ${feature.properties.hour}: </b>${feature.properties.total_trips_hour}<br/>
    <b style='font-size: 120%'>Outgoing trips:</b> ${feature.properties.start} <br/>
    <b style='font-size: 120%'>Incoming trips:</b> ${feature.properties.end} <br/>
   `,)
}

function TOTALonEachFeature (feature,layer) {
  var popup=layer.bindPopup(`
    <b style='font-size: 120%'>Station:</b> ${feature.properties.station} <br/>
    <b style='font-size: 120%'>Total trips:</b> ${feature.properties.total}  <br/>
    <b style='font-size: 120%'>Outgoing trips:</b> ${feature.properties.end} <br/>
    <b style='font-size: 120%'>Incoming trips:</b> ${feature.properties.start}  <br/>
  `)
}

// **********************************
//           ADD LAYERS            //
// **********************************

// DATA DOWNLOADED FROM:
// citibikenyc.com/system-data

// Only Stations
var all = L.geoJson(NYstations, {
  pointToLayer: function (feature, latlng) {
  return L.circleMarker(latlng)
  },
  style: TotStyle,
  onEachFeature: TOTALonEachFeature
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
