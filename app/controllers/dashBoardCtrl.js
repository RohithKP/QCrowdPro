angular.module('QCrowdPro').controller('dashBoardCtrl',['$scope','sTask',function ($scope,sTask) {
$scope.sugTask=[];
 sTask.$promise.then(
    function (data) {
        $scope.sugTask =data;
    }  ,function (error) {
      console.log(error);
    }
 );
 // aTask.$promise.then(
 //    function (data) {
 //        $scope.assignedTask =data;
 //    }  ,function (error) {
 //      console.log(error);
 //    }
 // );

}])
