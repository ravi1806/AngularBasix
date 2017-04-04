# Angular Basics

## Html Boilerplate

* Add a directive ng-app to the html tag.
* Add the scripts for angularjs and the dependencies.
* Create a div with directive ng-view where view will be rendered OR ng-controller with its controller.


## App.js Boilerplate

* Create an IIFE (optional) and put everything inside it.
* Make an angular module eg. `var myApp = angular.module('myApp',[]);` where the empty array can be filled with dependencies.

## Routing 
 * A fix for ! in the latest angularjs ->
 ```js
    myApp.config(['$locationProvider'function($locationProvider) {
    $locationProvider.hashPrefix('');
    }]);

 ```
 * In the html file, use paths as `href='#'` for index page, `#!/first`, `#!/second` and so on.
 * Use ngRoute as dependency.
 * To configure routes, use `myApp.config(function($routeProvider){});`
 * Body insde the function is 
 ```js
 
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

 ```
 
 
 

## Controllers

* Add a controller using `myApp.controller('ControllerName',['param1','param2','param3', function(param1,param2,param3)]);` 
* The params in the above case should be mentioned in the order.
* They define the functionality.
* They have a $scope object variable which is different for every controller.
* We can add our own variables and methods to this $scope.
* We can track user input and modify and return it to the html page by returning it through a method.(eg. 4app.js)
* Use $watch to track the variables eg. 
   ```js 
     $scope.$watch('handle', function(newValue, oldValue){ //for a variable $scope.handle
     //watches everything happening within the angular context
     console.info("Changed");
     console.log('old: '+ oldValue);
     console.log('new: '+ newValue);
      
    });
    ```
## Services

* Services are singletons(one and only copy of the pbject). So if you modify it in an a controller it will be modified for all. We can use this property to change data over multiple pages.
* The services are inbuilt as well as user built. Some examples of the inbuilt services are -> 
  * $filter eg. `$scope.formattedName = $filter('uppercase')($scope.name);`
  * $log eg. `$log.log` `$log.info` `$log.warn` `$log.error` `$log.debug`
  * $timeout for timeouts.
  * $location for $location.path() which gives the path after the #! in the url.
  * you need to pass these as parameters wherever you want to use them.

* Basic user built service example 
  ```js
    myApp.service('nameService', function(){
    
    var self = this;
    this.name = "Ravi Yadav";
    this.namelength = function(){
      return self.name.length;
    }
  });
  
  ```


## Dependencies

* **ngMessages** can be used for form validation.
* **ngResource** can be used to grab data from the internet. 

## Common Directives
* ng-show, ng-hide, ng-click, ng-if(removes completely from DOM so preferrably avoided) are some of the common directives.

## Using $http

* To get data from database using $http
```js
  
    
    $http.get('http://apiaddress')
            .success(function(result){
                //get the json data into $scope.rules 
                $scope.rules = result;
              })
                .error(function(data,status){
                    //This will give the error
                    console.log(data);
      
                  });
```

* To post data to the database from ur site
```js 
            $http.post('Whereusendintoaddress',{newRule: $scope.newRule})
                .success(function(result){
                    //on success, take the data from the database again and set it to $scope.rules to display and update the page
                    $scope.rules = result;
                    //make the input field empty again
                    $scope.newRule = '';
                  }).error(function(data,status){
                        console.log(data);  
                      });
    ```

## Custom Directives

*It returns an object.
*Example of a custom directive
```js
  myApp.directive('searchResult', function() {
    return {
      restrict: 'ECMA', //or EA or E(element) or A(attribute) or EACM , c for class and m for comments, by default only E and A are allowed.
      //instead of using template, use templateUrl and put the html code in a file with its address in templateUrl
      //template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Ravi, Yadav</h4><p class="list-group-item-text">B-304, Park Avenue, Cadbury Road</p></a>',
      templateUrl: 'directives/doc.html',
      replace: true //it is false by default, if set true it will not enclose within search-result (so css wont be confused)
           scope: {
       
        //1.write an attr in the first.html file for search-result called person-name
        //2.assign it the value of the $scope.person.name
        //3.get the value of that person-name attr here in text form
        //4.change the values in doc.html to personName and personAddress to be parsed.
        personName: '@', // or we could have written personNameOwnVariable = '@personName' 
        personAddress: '@',
        personObject: '=' //here we passing an entire object in the same way as above. BUT THIS IS 2 way binding. 
        formattedAddressFunction: '&' //passing a function
        
      } //an empty object of scope will isolate this directive from the controllers $scope so that variables arent changed    
    }
  });
  

```
   
