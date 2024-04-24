const questions = [
    {
        name: 'text',
        message: 'Enter a three-letter acronym:',
        validate: function (input) {
            if (input.length > 3) {
                return 'More than three letters entered.';
            }
            return true;
        }
    },
    {
        name: 'textColor',
        message: 'Enter a color or hexadecimal number (Ex: #000000):'
    },
    {
        name: 'shape',
        type: 'list',
        message: 'Select a backdrop shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        name: 'shapeColor',
        message: 'Enter a color or hexadecimal number (Ex: #000000) for the backdrop shape:'
    }
];

module.exports = questions;
