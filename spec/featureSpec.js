'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an aiport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});