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
  
  
  myApp.controller('MainController',['$scope','$log', function($scope,$log){

  
 
  }]);
  
  myApp.controller('SecondController',['$scope','$log','$routeParams', function($scope,$log,$routeParams){
    
    
  }]);
  
  myApp.directive('searchResult', function() {
    return {
      restrict: 'ECMA', //or EA or E or A or EACM , c for class and m for comments, by default only E and A are allowed.
      //instead of using template, use templateUrl and put the html code in a file with its address in templateUrl
//    template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Ravi, Yadav</h4><p class="list-group-item-text">B-304, Park Avenue, Cadbury Road</p></a>',
      templateUrl: 'directives/doc.html',
      replace: true //it is false by default, if set true it will not enclose within search-result (so css wont be confused)
    }
  });
  
  
})();