var myApp = angular.module("myApp",[]);

myApp.controller("MainController",['$scope','$timeout',function($scope,$timeout){
  
  $scope.name = "Ravi Yadav";
  
  $timeout(function(){
    $scope.name = "EveryboDy";
  },3000);
  
}]);