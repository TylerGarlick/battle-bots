'use strict';

var util = require('util')
  , EventEmitter = require('events').EventEmitter
  , _ = require('lodash');


function Game() {
  this.robots = []
}
util.inherits(Game, EventEmitter);

var _turnInterval = 500;
Object.defineProperties(Game.prototype, {

  robots: {
    enumerable: true,
    configurable: false,
    writable: true
  },

  canStart: {
    get: function () {
      return this.robots.length > 2;
    }
  },

  isFinished: {
    get: function () {
      var self = this;
      var aliveRobots = [];
      _.forEach(self.robots, function (robot) {
        if (robot.alive)
          aliveRobots.push(robot.alive);
      });
      return aliveRobots.length == 1 || aliveRobots.length == 0;
    }
  },

  start: {
    /**
     * Starts the game
     */
    value: function () {
      var self = this;
      if (!self.canStart) {
        throw new Error('You must have at least two robots');
      }
      self.emit('start');

      setTimeout(function () {
        if (!self.isFinished)
          self.emit('turn');
        else
          self.emit('game-over');
      }, _turnInterval);
    },
    enumerable: true,
    configurable: false
  }
  
});

module.exports = Game;
