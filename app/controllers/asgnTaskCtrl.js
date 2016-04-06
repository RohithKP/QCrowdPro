
angular.module('QCrowdPro').controller('asgnTaskCtrl',['$scope','$stateParams','steps','sTask','helpers',function ($scope,$stateParams,steps,sTask,helpers) {
    $scope.helpers = helpers;
    steps.$promise.then(function (data) {
         $scope.steps = data;
     },function (error) {
       console.log(error);
     })
    $scope.selected = 0;

    $scope.select= function(index) {
       $scope.selected = index;
    };
$scope.task = sTask[$stateParams.id-1];

$scope.pickTskResolver = {
    message:function () {
        return{
              taskItem:$scope.task
        }
    }
  }
}]);
