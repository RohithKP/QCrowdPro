angular.module('QCrowdPro').factory('dataFactory',['$resource',function($resource) {
  return{
    steps: $resource('./assets/json/steps.json',{}, {
       query: {
         method:'GET',
          isArray: false
        }
     }),
    sTask: $resource('./assets/json/sugested_tasks.json',{}),
    aTask: $resource('./assets/json/asgndTsk.json',{},{
      query: {
        method:'GET',
      isArray: true
    }
  })
  };

}]);
