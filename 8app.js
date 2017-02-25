(function(){
  
  var myApp  = angular.module('myApp',['ngRoute']);
  
  myApp.config(function($routeProvider){
    //The following code is only reqd when u dont want to use ! which is added by default in latest angular in the urls after #,
    
//  myApp.config(['$locationProvider'function($locationProvider) {
//  $locationProvider.hashPrefix('');
//}]);

    
    $routeProvider
     
      .when('/',{
        
        templateUrl: 'pages/first.html',
        controller: 'MainController'
        
      
      })
    
       .when('/second', {
        
        templateUrl: 'pages/second.html',
        controller: 'SecondController'
        
      })
    
        .when('/second/:num',{
        
        templateUrl: 'pages/second.html',
        controller: 'SecondController'
    })
    
  });
  
  myApp.controller('MainController',['$scope','$log', function($scope,$log){
    
    $scope.name = 'This is First html template';

  }]);
  
  myApp.controller('SecondController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){
    
    $scope.name = 'This is Second html template';
    $scope.num = $routeParams.num; //above in .when we used :num which is the routeParameter. we put that value here
    
  }]);
  
  
})();