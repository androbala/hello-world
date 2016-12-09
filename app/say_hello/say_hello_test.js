'use strict';

describe('helloApp.say_hello module', function() {
  var scope;
  var helloCtrl;

  beforeEach(module('helloApp.say_hello'));
  
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    helloCtrl = $controller('helloCtrl', {
            $scope: scope
        });
    }));

  describe('hello Controller',function(){
    //expect controller to be defined
	it('should be defined..', function(){
    	expect(helloCtrl).toBeDefined();
  	});
    //expect message property to be initialized
    it('properties should be initialized..', function(){
    	expect(scope.message).toEqual("World");
  	});
  });
  
});