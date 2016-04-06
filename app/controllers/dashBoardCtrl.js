angular.module('QCrowdPro').controller('dashBoardCtrl',['$scope','sTask','helpers','aTask',function ($scope,sTask,helpers,aTask) {
$scope.helpers = helpers;
$scope.sugTask=[];
$scope.tskselctd = undefined;
 sTask.$promise.then(
    function (data) {
        $scope.sugTask =data;
    }  ,function (error) {
      console.log(error);
    }
 );
 aTask.$promise.then(
    function (data) {
        $scope.assignedTask =data;
    }  ,function (error) {
      console.log(error);
    }
 );
 $scope.select = function (stask) {
   if ($scope.tskselctd == stask) {
     $scope.tskselctd = undefined;
   }else{
    $scope.tskselctd = stask
    }
 }

$scope.pickTskResolver = {
  message:function () {
        return {
            taskItem:$scope.tskselctd
            }
        }
}
}])
