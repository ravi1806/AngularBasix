(function(){
var myApp = angular.module('myApp',[]);

myApp.controller('MainController', function($scope){
  
  //we put all the data in here in $scope which goes back n forth in between the view(index.html) and the controller(MainController)
  
  console.log($scope);
  
  $scope.name = "Ravi Yadav";
  $scope.occupation = "coder";
  $scope.getName = function() {
    return "Ravi Yadav";
  };
  
});
})();