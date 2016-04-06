angular.module('QCrowdPro').controller('asgnTaskCtrl',['$scope','$stateParams','steps','sTask','helpers','id',function ($scope,$stateParams,steps,sTask,helpers,id) {
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

  sTask.$promise.then(function (data) {
      pos = data.map(function (e) {
          return e.id;
        }).indexOf(parseInt(id));
      $scope.task = sTask[pos];
  },function () {

  })

  $scope.pickTskResolver = {
    message:function () {
      return{
        taskItem:$scope.task
      }
    }
  }
}]);
