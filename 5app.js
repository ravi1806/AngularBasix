(function(){
  
  var myApp  = angular.module('myApp',[]);
  
  myApp.controller('MainController',['$scope','$filter',function($scope,$filter){
    
    $scope.handle = '';
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    };
    
    $scope.$watch('handle', function(newValue, oldValue){
      //watches everything happening within the angular context
      console.info("Changed");
      console.log('old: '+ oldValue);
      console.log('new: '+ newValue);
      
    });
    
    //when we dont use code within the angular context-> the following code wont work cos the digest loop wont start as its outside of angular context..so we need to use apply here or use $timeout instead of setTimeout
    
    setTimeout(function(){
      
      $scope.$apply(function(){
          $scope.handle = "Scope Changed here";
          console.log('Timeout here');
      });

    },3000);
    
  }]);
  
  
  
})();