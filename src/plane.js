'use strict';

class Plane {
  constructor() {
    this._location;
  };
  land(airport){
    airport.clearForLanding(this);
    this._location = airport;
  };
  takeoff(airport) {
    airport.clearForTakeOff(this);
    this._location.clearForTakeOff();
  };
};