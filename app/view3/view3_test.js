'use strict';

describe('myApp.view3 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view3 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View3Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});