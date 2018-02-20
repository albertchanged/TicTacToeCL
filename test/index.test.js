const game = require('../server/index.js');
describe('play', () => {
  it('asks a question', function () {
    return game.play('X') === 'X';
  });
});