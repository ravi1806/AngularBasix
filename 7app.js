(function(){
  
  var myApp  = angular.module('myApp',[]);
  
  myApp.controller('MainController',['$scope','$filter','$http', function($scope,$filter,$http){
    
    $scope.handle = '';
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
//    //This is now in a database
//    $scope.rules = [
//      {
//      rulename:"Must be 5 characters"  
//      },
//      {
//      rulename:"Must not be used elsewhere"
//      },
//      {
//      rulename:"Must be awesome"
//      }
//    ];
    
//To get data from database using $http
    
    $http.get('http://apiaddress')
            .success(function(result){
                //get the json data into $scope.rules 
                $scope.rules = result;
              })
                .error(function(data,status){
                    //This will give the error
                    console.log(data);
      
                  });
    
//To post data to the database from ur site
    
    $scope.newRule = ''; //the input field for adding rrule
    //this will add rule when button is clicked
    $scope.addRule = function() {
      //send an object with key as newRule and value as updated field value of input in html 
      $http.post('Whereusendintoaddress',{newRule: $scope.newRule})
                .success(function(result){
                    //on success, take the data from the database again and set it to $scope.rules to display and update the page
                    $scope.rules = result;
                    //make the input field empty again
                    $scope.newRule = '';
                  }).error(function(data,status){
                        console.log(data);  
                      });
      
    };
    
    
    
 }]);
  
  
  
})();