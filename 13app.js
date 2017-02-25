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

   $scope.people = [
      {
        name: "Ravie Yad",
        address: "B-304",
        city: 'Owl City', 
        town: 'Ghost town'
      },
      
      {
        name: "REda Yad",
        address: "C-304",
        city: 'Owl City', 
        town: 'Ghost town'
      },
  
      {
        name: "MErie Yad",
        address: "B-04",
        city: 'OwWWd City', 
        town: 'GhoDf town'
      }  
    
    
    ]
    
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

        personObject: '=', //here we passing an entire object in the same way as above. BUT THIS IS 2 way binding. 
        formattedAddressFunction: '&'
        
      },
//
//link is just the post property of compile..
//      link:  function(scope,elements,attrs) {
//              //this is on binding, runs for every elemnt with different scope. 
//              console.log('post linking....');
//              console.log(elements);
//              console.log(scope);
//              
//              if(scope.personObject.name == 'REda Yad'){
//                elements.removeAttr('class');
//              }
//              
//            },
      compile: function(elem, attrs) {
        //compile is one time, before data binding for initialization.
        console.log('compiling....');
        //elem.removeAttr('class'); //here we have modified prior to data binding in scope, i.e we change html before scope gets the binding.
        //console.log(elem.html());
        console.log(elem);
        
        return {
          
//            //its not safe to use pre links so we avoid the following code: 
//            pre: function(scope,elements,attrs) {
//              
//              console.log('pre linking....');
//              console.log(elements);
//              
//            },
            
            post: function(scope,elements,attrs) {
              //this is on binding, runs for every elemnt with different scope. 
              console.log('post linking....');
              console.log(elements);
              console.log(scope);
              
              if(scope.personObject.name == 'REda Yad'){
                elements.removeAttr('class');
              }
              
            }
          
          
        }
      },
        
          transclude: true
    
    };

  });
  
  
})();