'use strict';

var util = require('util')
  , EventEmitter = require('events').EventEmitter;

function AbstractRobot(name) {
  this.name = name;
}
util.inherits(AbstractRobot, EventEmitter);

var _health = 100;
Object.defineProperties(AbstractRobot.prototype, {

  health: {
    get: function () {
      return _health;
    },
    enumerable: true,
    configurable: false
  },

  alive: {
    get: function () {
      return _health > 0;
    },
    enumerable: true,
    configurable: false
  },

  name: {
    enumerable: true,
    configurable: false,
    writable: true
  }



});

module.exports = AbstractRobot;