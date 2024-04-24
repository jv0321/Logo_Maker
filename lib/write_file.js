const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Your SVG has been created!');
    });
}

module.exports = writeToFile;
