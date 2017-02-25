(function(){
  
  var myApp  = angular.module('myApp',['ngRoute']);
  
  myApp.config(function($routeProvider){

    
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
  
  myApp.service('nameService', function(){
    
    var self = this;
    this.name = "Ravi Yadav";
    this.namelength = function(){
      return self.name.length;
    }
  });
  
  myApp.controller('MainController',['$scope','$log','nameService', function($scope,$log,nameService){

    $scope.$watch(function(){
      nameService.name = $scope.name;
    });
    
    $scope.name = nameService.name;
    $log.log(nameService.name);
    $log.log(nameService.namelength());
 
  }]);
  
  myApp.controller('SecondController',['$scope','$log','$routeParams','nameService', function($scope,$log,$routeParams,nameService){
    
    $scope.$watch(function(){
      nameService.name = $scope.name;
    });
    $scope.name = nameService.name;
    $scope.num = $routeParams.num || 1; //above in .when we used :num which is the routeParameter. we put that value here
    
  }]);
  
  
})();