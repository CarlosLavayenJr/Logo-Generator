const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter up to three characters: ', (input) => {
    if (input.length <= 3) {
        console.log('You entered: ', input);
        // Now ask for the color
        rl.question('Enter a color keyword or a hexadecimal number: ', (color) => {
            if (/^#[0-9A-F]{6}$/i.test(color) || /^[a-zA-Z]+$/.test(color)) {
                console.log('You chose the color: ', color);
            } else {
                console.log('Invalid color format. Please enter a valid color keyword or hexadecimal number.');
            }
            rl.close();
        });
    } else {
        console.log('Error: Please enter no more than three characters.');
        rl.close();
    }
});
