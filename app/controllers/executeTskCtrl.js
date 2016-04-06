angular.module('QCrowdPro').controller('executeTskCtrl',function ($scope,steps,sTask,id,browserSelected) {

steps.$promise.then(function (data) {
  $scope.steps = data;
},function (error) {
  console.log(error);
});

$scope.browser = browserSelected;
sTask.$promise.then(function (data) {
    pos = data.map(function (e) {
        return e.id;
      }).indexOf(parseInt(id));
    $scope.stask = sTask[pos];
},function () {

})
$scope.remove = function (self) {
  self.picFile = null;
 }
})
