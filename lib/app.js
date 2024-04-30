const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter up to three characters: ', (input) => {
    if (input.length <= 3) {
        console.log('You entered: ', input);
        rl.question('Enter a color keyword or a hexadecimal number: ', (color) => {
            if (/^#[0-9A-F]{6}$/i.test(color) || /^[a-zA-Z]+$/.test(color)) {
                console.log('You chose the color: ', color);
                rl.question('Choose a shape (circle, triangle, square): ', (shape) => {
                    shape = shape.toLowerCase();
                    if (shape === 'circle' || shape === 'triangle' || shape === 'square') {
                        console.log('You chose the shape: ', shape);
                        rl.close();
                    } else {
                        console.log('Invalid shape. Please choose circle, triangle, or square.');
                        rl.close();
                    }
                });
            } else {
                console.log('Invalid color format. Please enter a valid color keyword or hexadecimal number.');
                rl.close();
            }
        });
    } else {
        console.log('Error: Please enter no more than three characters.');
        rl.close();
    }
});
