// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your projects ?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Description',
    name: 'projectDescription',
  },
  {
    type: 'input',
    message: 'Table of Contents',
    name: 'projectTableofContents',
  },
  {
    type: 'input',
    message: 'Installation',
    name: 'projectInstallation',
  },
  {
    type: 'input',
    message: 'Instructions',
    name: 'projectInstructions',
  },
  {
    type: 'input',
    message: 'Usage Information',
    name: 'projectUsageInformation',
  },
  {
    type: 'input',
    message: 'License',
    name: 'projectLicense',
  },
  {
    type: 'input',
    message: 'Contribution Guidelines',
    name: 'projectContributionGuideline',
  },
  {
    type: 'input',
    message: 'Test Instructions',
    name: 'projectTestInstructions',
  },
  {
    type: 'input',
    message: 'Questions',
    name: 'projectQuestions',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMeMarkDown = `
  ## project title 
  ${data.projectTitle}!

  ## Description 
  ${data.projectDescription}

  ## Table of Contents 
  ${data.projectTableofContents}

  ## installation 
  ${data.projectInstallationInstruction}
  
  ## Usage Information 
  ${data.projectUsageInformation}

  ## License 
  ${data.projectLicense}

  ## Contribution Guidelines 
  ${data.projectContributionGuideline}

  ## Test Instructions 
  ${data.projectTestInstructions}

  ## Questions 
  ${data.projectQuestions}

  `;
  fs.writeFile(fileName, readMeMarkDown, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile('README2.md', answers))
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();



/*
1. Write part of app that captures users input
    1.1 Import Inquirer package
    1.2 Test input capturing
    1.3 Verify input caputred to local memory
2. Write the part of the app that insert the input into the readme
    2.1 creating initial readme file in memory
    2.2 Add a section of captured input(from 1.2) into the file which exists only in memory

*/