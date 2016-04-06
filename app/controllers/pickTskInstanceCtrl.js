angular.module('QCrowdPro').controller('pickTskInstanceCtrl',function ($scope,$uibModalInstance,helpers,message,$state) {
  $scope.helpers = helpers;
  $scope.brarray = [];
$scope.taskItem = message.taskItem;
$scope.brarray = [];

$scope.proceed = function() {
  $state.go('home.asgnTask',{id:$scope.taskItem.id,browserSelected:$scope.browserSelected})
  $uibModalInstance.dismiss('cancel');
};
$scope.cancel = function () {
  $uibModalInstance.dismiss('cancel');
};

$scope.tSelect = function (browser) {
  if ($scope.browserSelected == browser) {
    $scope.browserSelected = undefined;
  }else{
   $scope.browserSelected = browser
   }
}
})
