angular.module('QCrowdPro').controller('executeTskCtrl',function ($scope,steps,sTask,id) {

steps.$promise.then(function (data) {
  $scope.steps = data;
  console.log(data);
},function (error) {
  console.log(error);
});

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
