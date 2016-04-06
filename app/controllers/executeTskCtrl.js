angular.module('QCrowdPro').controller('executeTskCtrl',function ($scope,steps) {

steps.$promise.then(function (data) {
  $scope.steps = data;
},function (error) {
  console.log(error);
});

$scope.remove = function (self) {
  self.picFile = null;
 }
})
