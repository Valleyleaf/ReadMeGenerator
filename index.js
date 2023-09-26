const inquirer = require('inquirer');
const fs = require('fs');

const initPrompt = ({projectname, projectdescription, installationinstructions, dependanciesinstructions, testinstructions, usageinstructions, licenceinstructions, creatorinstructions, emailinstructions}) => 
`
# ${projectname}
## 📝licence
![Github license](https://img.shields.io/badge/license-${licenceinstructions}-green.svg)

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

## 💊Test
${testinstructions}

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
            message: 'How to Use:', 
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
            message: 'Tests:',
            name: 'testinstructions',
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
generateContent();
