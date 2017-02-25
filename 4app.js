(function(){
  
  var myApp  = angular.module('myApp',[]);
  
  myApp.controller('MainController',['$scope','$filter',function($scope,$filter){
    
    $scope.handle = '';
    
    //$scope.lowercasehandle = $filter('lowercase')($scope.handle) //this line of code wont work as expected because lowercasehandle wont change with change in scope.handle as expected, because here it is only initialised once, and to track scope.handle and update lowercasehandle with it we need to add an eventlistner type of function to it as shown below..this is done to maintain some performance issues in angular.
    
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    };
    
  }]);
  
  
  
})();