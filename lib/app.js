async function runApp() {
    const inquirer = await import('inquirer');

    try {
        const { input } = await inquirer.default.prompt([
            {
                type: 'input',
                name: 'input',
                message: 'Enter up to three characters:',
                validate: function(value) {
                    if (value.length <= 3) return true;
                    return 'Please enter no more than three characters.';
                }
            }
        ]);

        const { color } = await inquirer.default.prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter a color keyword or a hexadecimal number:',
                validate: function(value) {
                    if (/^#[0-9A-F]{6}$/i.test(value) || /^[a-zA-Z]+$/.test(value)) return true;
                    return 'Invalid color format. Please enter a valid color keyword or hexadecimal number.';
                }
            }
        ]);

        const { shape } = await inquirer.default.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            }
        ]);

        console.log(`You entered: ${input}`);
        console.log(`You chose the color: ${color}`);
        console.log(`You chose the shape: ${shape}`);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

runApp();
