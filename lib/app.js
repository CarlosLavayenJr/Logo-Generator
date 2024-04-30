const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter up to three characters: ', (input) => {
    if (input.length <= 3) {
        console.log('You entered: ', input);
    } else {
        console.log('Error: No more than three characters.');
    }
    rl.close();
});
