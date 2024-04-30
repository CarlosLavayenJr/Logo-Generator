// app.js

// Dynamic import of necessary modules
async function runApp() {
    const inquirer = await import('inquirer');
    const fs = await import('fs/promises');  // Ensure the fs module is imported for file operations

    try {
        // Prompt for text input
        const { input } = await inquirer.default.prompt([
            {
                type: 'input',
                name: 'input',
                message: 'Enter up to three characters:',
                validate: value => value.length <= 3 || 'Please enter no more than three characters.'
            }
        ]);

        // Prompt for text color
        const { textColor } = await inquirer.default.prompt([
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color keyword or a hexadecimal number for the text:',
                validate: value => /^#[0-9A-F]{6}$/i.test(value) || /^[a-zA-Z]+$/.test(value) || 'Invalid color format. Please enter a valid color keyword or hexadecimal number.'
            }
        ]);

        // Prompt for choosing a shape
        const { shape } = await inquirer.default.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            }
        ]);

        // Prompt for shape color
        const { shapeColor } = await inquirer.default.prompt([
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color keyword or a hexadecimal number for the shape:',
                validate: value => /^#[0-9A-F]{6}$/i.test(value) || /^[a-zA-Z]+$/.test(value) || 'Invalid color format. Please enter a valid color keyword or hexadecimal number.'
            }
        ]);

        // Generate SVG content based on user input
        const svgContent = generateSVG(input, textColor, shape, shapeColor);
        await fs.writeFile('logo.svg', svgContent);  // Write the SVG content to a file named 'logo.svg'

        console.log('Generated logo.svg');  // Confirmation message
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Function to generate SVG based on inputs
function generateSVG(text, textColor, shape, shapeColor) {
    const width = 500;  
    const height = 300; 
    const smallerDimension = Math.min(width, height);
    const shapeRadius = smallerDimension === width ? width / 2 : height / 2; 
    const textSize = Math.min(width, height) * 0.45; 
    const fontFamily = "Comic Sans MS"

    let shapeSVG = '';

    // Switch to determine the SVG shape based on user input
    switch (shape) {
        case 'circle':
            shapeSVG = `<circle cx="${width / 2}" cy="${height / 2}" r="${shapeRadius}" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            // Define your triangle points here
            break;
        case 'square':
            // Define your square points here
            break;
    }

    // SVG root element with the defined width and height
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        ${shapeSVG}
        <text x="${width / 2}" y="${height / 2}" font-size="${textSize}" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
    </svg>`;
}








runApp();  // Execute the runApp function
