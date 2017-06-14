/* Angular Unit Tests */

describe('Main controller', function() {
  var $controller;
  
  beforeEach(function(){
    module('myApp');
    inject(function($injector){
      $controller = $injector.get('$controller');
    });
  });
  
  it('Testing initial $scope.showVideo', function() {
    var $scope = {};
    var ctrl = $controller('mainCtrl', { $scope: $scope });
    expect($scope.showVideo).toEqual(false);
  });

  it('Testing $scope.showVideo in submit() function', function() {
    var $scope = {};
    var ctrl = $controller('mainCtrl', { $scope: $scope });
    $scope.submit();
    expect($scope.showVideo).toEqual(false);
  });

  it ("Should invoke the fileupload click event.", function() {
    var $scope = {};
    var ctrl = $controller('mainCtrl', { $scope: $scope });
    var spyEvent = spyOnEvent('#fileupload', 'click')
    $scope.submit();
    expect('click').toHaveBeenTriggeredOn('#fileupload');
    expect(spyEvent).toHaveBeenTriggered();
  });

});