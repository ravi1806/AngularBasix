(function(){
  
  var myApp  = angular.module('myApp',[]);
  
  myApp.controller('MainController',['$scope','$filter',function($scope,$filter){
    
    $scope.handle = 'me';
    $scope.handlelowercase =function() {return $filter('lowercase')($scope.handlelowercase);};
   
    $scope.$watch('handlelowercase',function(newValue,oldValue){
      
      console.info('changed');
      console.log('old: ' + oldValue);
      console.log('new: ' + newValue);
    });
    
  }]);
  
  
  
})();