(function(){

angular.module("mymodule",[])
.controller("mycontroller",mycon);


mycon.$inject['$scope','$filter'];

function mycon($scope,$filter){
  $scope.name="";
  $scope.situation="dog";
  $scope.costcat= 5000 ;
  $scope.costdog= 7000 ;
$scope.dog=function(){
  $scope.situation="dog";
};
$scope.cat=function(){
  $scope.situation="cat";
};
$scope.calcost=function()
{
  if ($scope.situation=="dog")
  {
    return $scope.costdog;
  }
  else {
    return $scope.costcat;
  }
};
$scope.change= function(){
 if($scope.name=="ram")
 {
   $scope.name="diraj";
 }
};
$scope.displaymsg= function(){
var msg= "this is to test the uppercase function";
var output= $filter('uppercase')(msg);
return output;
};
}
function programfilter()
{
  return function (input) {

  };
}
})();
