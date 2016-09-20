'use strict';

describe('comment module', function() {

  beforeEach(module('myApp.view1'));

  describe('comment controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var commentCtrl = $controller('commentCtrl');
      expect(commentCtrl).toBeDefined();
    }));

  });
});