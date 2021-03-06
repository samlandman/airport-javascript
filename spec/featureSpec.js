'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    
    it('planes can be instructed to land at an aiport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to takeoff', function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions', function(){

    it('takeoff is blocked', function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff(airport);}).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });
    it('landing is blocked', function(){
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
    });
  });
});