'use strict';

require('chai').should();

var AbstractRobot = require('../lib/robots/abstract');

describe('Abstract Robot', function () {

  var abstractRobot;
  beforeEach(function () {
    var name = 'Bob';
    abstractRobot = new AbstractRobot(name);
    abstractRobot.should.be.ok;
    abstractRobot.name.should.eql(name);
  });

  it('should have a health property that is readonly and defaults to 100', function () {
    abstractRobot.health.should.be.eql(100);

    (function () {
      abstractRobot.health = 200;
    }).should.throw(Error);

  });

  it('should be alive by default', function () {
    abstractRobot.alive.should.be.true;
  });

});
