angular.module('QCrowdPro',['ui.router','ui.bootstrap','ngAnimate','angularUtils.directives.uiBreadcrumbs','ngResource']).config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
    controller: 'validationCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'partials/register.html',
    controller:'validationCtrl'
  })
  .state('home', {
    url: '/home',
    views:{
      '':{templateUrl: 'partials/home.html'},
      'mainView@home':{
        templateUrl:'partials/dashboard.html',
        controller:'dashBoardCtrl'
      }
    },resolve:{
      sTask:function (dataFactory) {
        return dataFactory.sTask.query();
      },
      // aTask:function (dataFactory) {
      //   return dataFactory.aTask.query();
      // }
    },
    data:{
      displayName:'Home'
    }
  })
  .state('home.asgnTask', {
    url: '/assignTask',
    views:{
      'mainView@home':{
        templateUrl:'partials/asgnTask.html',
        controller:'asgnTaskCtrl'
      }
    },
    resolve:{
      steps:function (dataFactory) {
        return dataFactory.steps.query().$promise.then();
      }
    },
    data:{
      displayName:'Assign Task'
    }
  })
  .state('home.asgnTask.execute', {
    url: '/execute',
    views:{
      'mainView@home':{
        templateUrl:'partials/execute.html',
        controller:'executeTskCtrl'
      }
    },
    data:{
      displayName:'Execute'
    }
  })

});

angular.module("QCrowdPro").run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
  }
);
});
