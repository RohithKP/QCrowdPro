
angular.module('QCrowdPro').controller('validationCtrl',['$scope','$state',function($scope,$state) {
  $scope.login = function() {
    $scope.$broadcast('show-errors-check-validity');
    if ($scope.loginForm.$valid) {
      $scope.reset();
       $state.go('home');
    }
  };
  $scope.submit = function () {
    $scope.$broadcast('show-errors-check-validity');
    if ($scope.registerForm.$valid) {
      $scope.reset();
      $state.go('login');
    }
  }
  $scope.reset = function() {
    $scope.$broadcast('show-errors-reset');
    $scope.register ={ name: '', email: '', website : '', contact: '', number: '' };
    $scope.user = { name: '', password: ''};
  }
}]);
