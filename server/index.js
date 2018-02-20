const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'What is your move? '
});

rl.prompt();

rl.on('line', (line) => {
  if (line.trim() === 'X') {
    console.log('Got it. You chose X');
    rl.prompt();
  } else if (line.trim() === 'O') {
    console.log('Got it. You chose O');
    rl.prompt();
  } else {
    console.log('Invalid input, please try again');
    rl.prompt();
  }
}).on('close', () => {
  console.log('Closing game');
  process.exit(0);
});
