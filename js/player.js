
// **********************************
// LAYER CONTROL                   //
// **********************************

var time=300; // .3 seconds

var overlayArray = {
	'Only stations':all,
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

// var layerVar = L.control.layers(overlayArray,null)
var layerVar = L.control.layers(overlayArray,null,{collapsed:false, position: 'topright'})

// **********************************
// PLAY ARRAY                      //
// **********************************
// Define an array with all the layers of the map.
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

// Define an array with all labels that will change in the container at the left.

var timesArray = new Array (
        'All day',
        '12:00 - 12:59 am',
       	'1:00 - 1:59 am',
       	'2:00 - 2:59 am',
       	'3:00 - 3:59 am',
       	'4:00 - 4:59 am',
       	'5:00 - 5:59 am',
       	'6:00 - 6:59 am',
       	'7:00 - 7:59 am',
       	'8:00 - 8:59 am',
       	'9:00 - 9:59 am',
       	'10:00 - 10:59 am',
       	'11:00 - 11:59 am',
       	'12:00 - 12:59 pm',
       	'1:00 - 1:59 pm',
       	'2:00 - 2:59 pm',
       	'3:00 - 3:59 pm',
       	'4:00 - 4:59 pm',
       	'5:00 - 5:59 pm',
       	'6:00 - 6:59 pm',
       	'7:00 - 7:59 pm',
       	'8:00 - 8:59 pm',
       	'9:00 - 9:59 pm',
       	'10:00 - 10:59 pm',
       	'11:00 - 11:59 pm',
  );

var tripsArray = new Array (
                '73,728',
                '391'	,
                '137'	,
                '61'	,
                '45'	,
                '102'	,
                '558'	,
                '2,093'	,
                '4,454'	,
                '8,047'	,
                '6,056'	,
                '2,949'	,
                '2,487'	,
                '3,199'	,
                '3,250'	,
                '3,392'	,
                '3,821'	,
                '4,715'	,
                '7,225'	,
                '8,141'	,
                '5,125'	,
                '3,242'	,
                '1,996'	,
                '1,451'	,
                '791'	,
  );

var incomingtripsArray = new Array (
                '36,864',
                '173',
                '66',
                '31',
                '21',
                '52',
                '308',
                '1,140',
                '2,392',
                '4,174',
                '2,782',
                '1,391',
                '1,274',
                '1,628',
                '1,598',
                '1,713',
                '1,951',
                '2,378',
                '3,779',
                '3,991',
                '2,410',
                '1,568',
                '971',
                '696',
                '377',
  );

var outgoingtripsArray = new Array (
                '36,864',
                '218',
                '71',
                '30',
                '24',
                '50',
                '250',
                '953',
                '2,062',
                '3,873',
                '3,274',
                '1,558',
                '1,213',
                '1,571',
                '1,652',
                '1,679',
                '1,870',
                '2,337',
                '3,446',
                '4,150',
                '2,715',
                '1,674',
                '1,025',
                '755',
                '414',
  );


// Set a loop to display layers sequentially and changes the text displayed in the container.

var i     = -1;  // Starts -1 because the first layer in the array is 0
var timer;
var l 		=  1;

function playFunction() {
    timer=setTimeout(changeLayerFunc, time);
		$('#PauseButtonD').show();
		$('#StopButtonD').show();
		$('#PauseButton').hide();
		$('#StopButton').hide();
		$('#StartButton').show();
		$('#StartButtonD').hide();
}

function changeLayerFunc() {
    if (i <= 22) {
      i += 1;
      map.removeLayer(layersArray[i]);
      map.addLayer(layersArray[i+1]);
      timer=setTimeout(changeLayerFunc, time);
      $('#hour').text(timesArray[i+1])
      $('#trips').text(tripsArray[i+1])
      $('#incomingtrips').text(incomingtripsArray[i+1])
      $('#outgoingtrips').text(outgoingtripsArray[i+1])
    }
    else {
      map.removeLayer(layersArray[i+1]);
      map.addLayer(layersArray[0])
      timer=setTimeout(changeLayerFunc, time);   // Comment out to change from a loop to one single animation
      i = -1
      }
    }

function pauseFunction() {   // Function called by "pause" button, stops the timer but doesnt reset the player.
  window.clearTimeout(timer);
	$('#PauseButtonD').hide();
	$('#StopButtonD').hide();
	$('#PauseButton').show();
	$('#StopButton').show();
	$('#StartButton').hide();
	$('#StartButtonD').show();
}

function stopFunction() {   // Function called by "stop" button, resets the player.
  window.clearTimeout(timer)
  map.removeLayer(layersArray[i+1]);
  map.addLayer(layersArray[0]);
  i = -1;
	$('#PauseButtonD').hide();
	$('#StopButtonD').hide();
	$('#PauseButton').show();
	$('#StopButton').show();
	$('#StartButton').hide();
	$('#StartButtonD').show();
}

function showLayerFunction() {   // Function called by "Show layer" button, resets the player.
	layerVar.addTo(map);
	$('#layerButtonMin').show();
	$('#layerButtonMax').hide();
}

function hideLayerFunction() {   // Function called by "Hide layer" button, resets the player.
	map.removeControl(layerVar);
	$('#layerButtonMin').hide();
	$('#layerButtonMax').show();
}

function showinfoFunction() {   // Function called by "Show info" button, resets the player.
  $('#StartModalLong').modal('show');
}

function showgraphFunction() {   // Function called by "Show graph" button, resets the player.
  $('#GraphicsModalLong').modal('show');
}

///////////////////

$('#StartButtonD').click(playFunction);

$('#PauseButtonD').click(pauseFunction);

$('#StopButtonD').click(stopFunction);

///////////////////

$('#layerButtonMax').click(showLayerFunction);

$('#layerButtonMin').click(hideLayerFunction);

$('#infoButton').click(showinfoFunction);

$('#graphButton').click(showgraphFunction);
