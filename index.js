import('inquirer').then(async (inquirer) => {
    const writeToFile = require('./lib/write_file');
    const { Triangle, Circle, Square } = require('./lib/shapes');
    const questions = require('./lib/questions');

    // Function to create the SVG file based on user input
    async function createSVGFile() {
        try {
            const userInput = await inquirer.default.prompt(questions); // Use inquirer.default.prompt instead of inquirer.prompt
            let shape;
            switch (userInput.shape) {
                case 'Triangle':
                    shape = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor).render();
                    break;
                case 'Circle':
                    shape = new Circle(userInput.text, userInput.textColor, userInput.shapeColor).render();
                    break;
                case 'Square':
                    shape = new Square(userInput.text, userInput.textColor, userInput.shapeColor).render();
                    break;
                default:
                    console.log('Invalid shape entered');
                    return;
            }
            writeToFile('./examples/logo.svg', shape);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    // Run the function to create the SVG file
    createSVGFile();
});
