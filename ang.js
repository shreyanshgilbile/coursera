(function(){

var myapp = angular.module("mymodule",[]);
myapp.controller("mycontroller",function($scope){
$scope.name="";
$scope.totalnamevalue =0;

$scope.calstringvalue = function(){
  var totalvalue = calculate($scope.name);
  $scope.totalnamevalue=totalvalue;
};

function calculate(string){
  var totalstringvalue=0;
  for(var i=0;i<string.length,i++)
  {
    totalstringvalue+=string.charCodeAt(i);
  }
  return totalstringvalue;
};


});


})();
