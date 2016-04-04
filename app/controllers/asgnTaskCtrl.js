angular.module('QCrowdPro').controller('asgnTaskCtrl',['$scope','$stateParams','dataFactory',function ($scope,$stateParams,dataFactory) {

    dataFactory.steps.query().$promise.then(function (data) {
         $scope.steps = data;
     },function (error) {
       console.log(error);
     })

    $scope.selected = 0;

    $scope.select= function(index) {
       $scope.selected = index;
    };

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
