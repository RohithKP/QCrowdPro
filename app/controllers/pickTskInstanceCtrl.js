angular.module('QCrowdPro').controller('pickTskInstanceCtrl',function ($scope,$uibModalInstance,helpers,message) {
  $scope.helpers = helpers;
  $scope.brarray = [];
$scope.taskItem = message.taskItem;
$scope.brarray = [];

$scope.proceed = function() {
  $uibModalInstance.dismiss('cancel');
};
$scope.cancel = function () {
  $uibModalInstance.dismiss('cancel');
};
})
