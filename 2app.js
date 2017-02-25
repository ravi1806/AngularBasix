(function(){
  var myApp = angular.module("myApp",['ngMessages','ngResource']);
  
  myApp.controller("MainController",  function($scope,$log,$filter,$resource){
    
    $scope.field = '';
    console.log($scope);
    console.log($log);
    
    $log.log("Hello World");
    $log.info("This is some information");
    $log.warn("This is a warning for you");
    $log.error("The is an error message");
    $log.debug("This is a mess for debugging");
    
    $scope.name = "Ravi Yadav";
    $scope.formattedName = $filter('uppercase')($scope.name); ///see that uppercase is not a method, no . after uppercase
    
    $log.info($scope.name);
    $log.info($scope.formattedName);
    
    console.log($resource);
    
  });
  })();