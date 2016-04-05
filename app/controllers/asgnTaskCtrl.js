angular.module('QCrowdPro').controller('asgnTaskCtrl',['$scope','$stateParams','steps',function ($scope,$stateParams,steps) {
  steps.$promise.then(function (data) {
         $scope.steps = data;
     },function (error) {
       console.log(error);
     })
    $scope.selected = 0;

    $scope.select= function(index) {
       $scope.selected = index;
    };
}]);
