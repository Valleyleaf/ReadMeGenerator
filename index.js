const inquirer = require('inquirer');
const fs = require('fs');

const initPrompt = ({projectname, projectdescription, installationinstructions, dependanciesinstructions, usageinstructions, licenceinstructions, creatorinstructions, emailinstructions}) => 
`
# ${projectname}

## ✨Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Dependancies](#Dependancies)
* [Usage](#Usage)
* [licence](#licence)
* [Questions](#Questions)

## 💻Description
${projectdescription}

## 🚨Installation
${installationinstructions}

## ✅Dependancies
${dependanciesinstructions}

## 🚀Usage
${usageinstructions}

## 📝licence
![Github license](https://img.shields.io/badge/license-${licenceinstructions}-green.svg)

## 👤Questions
Find me at https://github.com/${creatorinstructions} or reach out to me
at: ${emailinstructions}

`

function generateContent(){
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Name:',
            name: 'projectname',
        },
        {
            type: 'input',
            message: 'Project Description:',
            name: 'projectdescription',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installationinstructions',
        },
        {
            type: 'input',
            message: 'Dependancies:',
            name: 'dependanciesinstructions',
        },
        {
            type: 'input',
            message: 'Technologies used:', 
            name: 'usageinstructions',
        },
        {
            type: 'checkbox',
            name: 'licenceinstructions',
            message: 'What licence do you wish to use:',
            choices: ['MIT,','APACHE2.0','Boost1.0','MPL2.0','BSD3','None'],
        },
        {
            type: 'input',
            message: 'Creator:',
            name: 'creatorinstructions',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'emailinstructions',
        },
    ])
    .then((inputs) => {
    const compiledReadmeValues = initPrompt(inputs)
    console.log('compiledReadmeValues: ', compiledReadmeValues)
    fs.writeFile('./GeneratedFiles/Readme.md', compiledReadmeValues, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('File written successfully.');
    })
    });

};

// a

// Start function.
generateContent();
    // What is needed for this
        //GIVEN a command-line application that accepts user input !
        // WHEN I am prompted for information about my application repository!
        // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        // WHEN I enter my project title !
        // THEN this is displayed as the title of the README !
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions !
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests !
        // WHEN I choose a license for my application from a list of options !
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        // WHEN I click on the links in the Table of Contents
        // THEN I am taken to the corresponding section of the README

            //Here are some guidelines to help you get started:

            // * Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

            // * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. 
            // This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.