// angular.module("myApp", []).controller("myAppController", ['$scope', '$http', function($scope, $http) {
//   $http.get("js/dummy.json")
//     .success(function(response) {
//       $scope.products = response;
//     });

//   $scope.seriesData = [];

//   $.each($scope.products, function(i, point) {
//     point.name = point.$scope.products.name;
//     point.data = point.$scope.products.temp;
//     $scope.seriesData.push(point);
//   });
//   console.log('hello');
$(function() {
  $.getJSON('js/dummy.json', function(json) {
    var options = {
      chart: {
        renderTo: 'container1',
        type: 'column'
      },
      title: {
        text: 'Average Temperature'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Temperature(Celcius)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: json
    };
    var chart = new Highcharts.Chart(options);
  });
});
