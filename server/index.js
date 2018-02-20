const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'What box # would you like to occupy? '
});

function play(player) {
  console.log('Player', player + '\'s turn');
  rl.prompt();
  let playObj = {};
  rl.on('line', (line) => {
    if (!playObj[line.trim()]) {
      playObj[line.trim()] = player;
      if (player === 'X') {
        play('O');
      } else {
        play('X');
      }
      console.log(playObj);
    }
  })
  return playObj;
}
// rl.on('line', (line) => {
//   if (line.trim() === 'X') {
//     console.log('Got it. You chose X');
//     rl.prompt();
//   } else if (line.trim() === 'O') {
//     console.log('Got it. You chose O');
//     rl.prompt();
//   } else {
//     console.log('Invalid input, please try again');
//     rl.prompt();
//   }
// }).on('close', () => {
//   console.log('Closing game');
//   process.exit(0);
// });

play('X');

module.exports.play = play;