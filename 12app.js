(function(){
  
  var myApp  = angular.module('myApp',['ngRoute']);
  
  myApp.config(function($routeProvider){

    
    $routeProvider
     
      .when('/',{
        
        templateUrl: 'pages/third.html',
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

    $scope.person = {
      name: "Ravie Yad",
      address: "B-304",
      city: 'Owl City', 
      town: 'Ghost town'
    }
    
    $scope.formattedAddress = function(person) {
      return person.address + ',' + person.city + ',' + person.town;
    };
 
  }]);
  
  myApp.controller('SecondController',['$scope','$log','$routeParams', function($scope,$log,$routeParams){
    
    
  }]);
  
  myApp.directive('searchResult', function() {
    return {
      restrict: 'ECMA',
      templateUrl: 'directives/doc.html',
      replace: true,
      scope: {
        //Now to get some data from the $scope of controller we need to use some custom attr. like below
        //we need to use person-name attr for search-result in the html page, then here we define it as text
        //the below statement is local text binding
        //how this works is as follows
        //1.write an attr in the first.html file for search-result called person-name
        //2.assign it the value of the $scope.person.name
        //3.get the value of that person-name attr here in text form
        //4.change the values in doc.html to personName and personAddress to be parsed.
       // personName: '@', // or we could have written personNameOwnVariable = '@personName' 
      //  personAddress: '@',
        personObject: '=', //here we passing an entire object in the same way as above. BUT THIS IS 2 way binding. 
        formattedAddressFunction: '&'
        
      } //an empty object of scope will isolate this directive from the controllers $scope so that variables arent changed
    }
  });
  
  
})();