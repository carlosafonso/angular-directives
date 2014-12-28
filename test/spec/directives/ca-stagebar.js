'use strict';

describe('Directive: caStagebar', function () {

	// load the directive's module
	beforeEach(module('testApp'));

	var element,
	scope;

	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new();
	}));

	it('should make hidden element visible', inject(function ($compile) {
		element = angular.element('<ca-stagebar></ca-stagebar>');
		element = $compile(element)(scope);
		expect(element.text()).toBe('this is the caStagebar directive');
	}));
});
