angular.module('QCrowdPro').controller('executeTskCtrl',function ($scope,steps) {
steps.$promise.then(function (data) {
$scope.steps = data;
  console.log(data);
},function (error) {
  console.log(error);
});

})
