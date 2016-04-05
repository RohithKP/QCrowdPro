angular.module('QCrowdPro').controller('asgnTaskCtrl',['$scope','$stateParams','dataFactory','sTask','helpers',function ($scope,$stateParams,dataFactory,sTask,helpers) {
$scope.helpers = helpers;
    dataFactory.steps.query().$promise.then(function (data) {
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
    // $scope.testerOptions =   {
    //   options:    $scope.testers,
    //   selected:    $scope.testers[0]
    // };
    // $scope.assgnTskResolver={
    //   message: function () {
    //     return {
    //           browsers : ["chrome","firefox","internet-explorer","safari","opera"],
    //           brarray : [],
    //           testerOptions:$scope.testerOptions,
    //           testCaseName:$stateParams.key
    //            }
    //   }
    // }
}]);
