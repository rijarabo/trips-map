
// Using http://www.chartjs.org/

// Total trips chart //

var ctx = document.getElementById('TotalChart').getContext('2d');
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels:
        ['12:00 am - 12:59 am', '1:00 am - 1:59 am', '2:00 am - 2:59 am', '3:00 am - 3:59 am', '4:00 am - 4:59 am', '5:00 am - 5:59 am', '6:00 am - 6:59 am', '7:00 am - 7:59 am', '8:00 am - 8:59 am', '9:00 am - 9:59 am', '10:00 am - 10:59 am', '11:00 am - 11:59 am', '12:00 pm - 12:59 pm', '1:00 pm - 1:59 pm', '2:00 pm - 2:59 pm', '3:00 pm - 3:59 pm', '4:00 pm - 4:59 pm', '5:00 pm - 5:59 pm', '6:00 pm - 6:59 pm', '7:00 pm - 7:59 pm',
        '8:00 pm - 8:59 pm', '9:00 pm - 9:59 pm', '10:00 pm - 10:59 pm', '11:00 pm - 11:59 pm'],
        datasets: [
        {
            label: 'Total trips',
            backgroundColor: 'rgba(0, 0, 205, .6)',
            borderColor: 'rgba(0, 0, 205, .6)',
            pointBackgroundColor: 'rgba(0, 0, 205, .6)',
            data: [391, 137, 61, 45, 102, 558, 2093, 4454, 8047, 6056, 2949, 2487, 3199, 3250, 3392, 3821, 4715, 7225, 8141, 5125, 3242, 1996, 1451, 791],
        },
        ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: { display: true, fontSize: 8}
          }],
        yAxes: [{
          ticks: { display: true, fontSize: 8}
          }]
      },
      legend: {
        display: true,
      }
    }
});

var ctx = document.getElementById('StartEndTotal').getContext('2d');
var chart3 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    data: {
        labels:
        ['12:00 am - 12:59 am', '1:00 am - 1:59 am', '2:00 am - 2:59 am', '3:00 am - 3:59 am', '4:00 am - 4:59 am', '5:00 am - 5:59 am', '6:00 am - 6:59 am', '7:00 am - 7:59 am', '8:00 am - 8:59 am', '9:00 am - 9:59 am', '10:00 am - 10:59 am', '11:00 am - 11:59 am', '12:00 pm - 12:59 pm', '1:00 pm - 1:59 pm', '2:00 pm - 2:59 pm', '3:00 pm - 3:59 pm', '4:00 pm - 4:59 pm', '5:00 pm - 5:59 pm', '6:00 pm - 6:59 pm', '7:00 pm - 7:59 pm',
        '8:00 pm - 8:59 pm', '9:00 pm - 9:59 pm', '10:00 pm - 10:59 pm', '11:00 pm - 11:59 pm'],
        datasets: [
        {
            label: 'Leaving trips',
            backgroundColor: 'rgba(220, 20, 60, .6)',
            borderColor: 'rgba(220, 20, 60, .6)',
            pointBackgroundColor: 'rgba(220, 20, 60, .6)',
            data: [218, 71, 30, 24, 50, 250, 953, 2062, 3873, 3274, 1558, 1213, 1571, 1652, 1679, 1870, 2337, 3446, 4150, 2715, 1674, 1025, 755, 414],
        },
        {
            label: 'Incoming  trips',
            backgroundColor: 'rgba(50, 205, 50, .6)',
            borderColor: 'rgba(50, 205, 50, .6)',
            pointBackgroundColor: 'rgba(50, 205, 50, .6)',
            data: [173,66, 31, 21, 52, 308, 1140, 2392, 4174, 2782, 1391, 1274, 1628, 1598, 1713, 1951, 2378, 3779, 3991, 2410, 1568, 971, 696, 377],
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: { display: true, fontSize: 8}
          }],
        yAxes: [{
          ticks: { display: true, fontSize: 8}
          }]
      },
      legend: {
        display: true,
      }
    }
});
