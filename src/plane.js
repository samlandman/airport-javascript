'use strict';

class Plane {
  land(airport){
    airport.clearForLanding(this);
    console.log('Line 6');
    console.log(this);
  };
};