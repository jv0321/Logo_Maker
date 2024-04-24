
// const writeToFile = require('./write_file');
// const shapes = require('./shapes');
// const inquirer = require('inquirer');
// const questions = require('./questions');


// function createSVGFile() {

//     inquirer.prompt(questions)
//         .then((answers) => {

//             let shapeChoice;
//             switch(answers.shape) {
//                 case 'Triangle':
//                     shapeChoice = new shapes.Triangle(answers.text, answers.textColor, answers.shapeColor).render();
//                     break;
//                 case 'Circle':
//                     shapeChoice = new shapes.Circle(answers.text, answers.textColor, answers.shapeColor).render();
//                     break;
//                 case 'Square':
//                     shapeChoice = new shapes.Square(answers.text, answers.textColor, answers.shapeColor).render();
//                     break;
//                 default:
//                     console.log('Invalid shape entered');
//             }
            

//             if (shapeChoice) {
//                 writeToFile('./examples/logo.svg', shapeChoice);
//             } else {
//                 console.log('Error generating SVG content');
//             }           
//         })
        
//         .catch((err) => {
//             console.log(err);
//         });
// }


// module.exports = createSVGFile;
