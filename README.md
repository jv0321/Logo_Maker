# Logo_Maker


# Overview

This application enables users to create an SVG logo by responding to four questions within the VSCode terminal.


# Table of Contents

Usage

Credits

License

Contributing

Tests

Questions

Visuals


# Usage

To use the application, the user should run node index.js in the VSCode terminal and answer the following questions:

Enter a three-letter acronym.

Choose a color for the text.

Select a shape from triangle, circle, or square.

Specify a color for the chosen shape.


Upon completing the final question, a logo.svg file will be generated in the examples folder. Note that colors should be entered as color keywords (e.g., "red") or hexadecimal numbers starting with # (e.g., "#4F5B66").


Note: Ensure that Node.js, Inquirer, and Jest are installed via npm to use this application.


# Credits

Special thanks to JD Tadlock for providing all the instructions during the Rutgers Coding Bootcamp.


# License

This project is licensed under the MIT License, a permissive license that requires the preservation of copyright and license notices. Modifications and larger works may be distributed under different terms and without source code. For more details, refer to the LICENSE file in the repository.


# Contributing

Please refer to the Contributor Covenant for guidelines on contributing to this project.


# Tests

To run tests, execute the npm test command in the VSCode terminal. The tests in test.shapes.js verify the presence of the correct shape string with a blue color in the selected shape class.


# Questions


![alt text](image.png)

