'use strict';

require('chai').should();

var Game = require('../lib/game');

describe('Game', function () {

  var game;
  beforeEach(function () {
    game = new Game();
  });

  it("shouldn't be able to start without any robots", function () {
    game.canStart.should.be.false;
  });
});
