const inquirer = require('inquirer');
const fs = require('fs');


function compileReadMeFile(a, b, c, d, e, f, g, h, i, j){
    console.log('This is the values that comes into complieReadmeFile:', a, b, c, d, e, f, g, h, i, j);
};




const readMeGenerator = ({projectname, projectdescription, installationinstructions, dependanciesinstructions, usageinstructions, imageInsert, licenceinstructions, contributeinstructions, featureinstructions}) => 
`
#${projectname}

##Description
${projectdescription}
##-----------------------------------------------------------------------
##Installation
${installationinstructions}
##-----------------------------------------------------------------------
##Dependancies
${dependanciesinstructions}
##-----------------------------------------------------------------------
##Usage
${usageinstructions}
##-----------------------------------------------------------------------
##Images
${imageInsert}
##-----------------------------------------------------------------------
##licence
${licenceinstructions}
##-----------------------------------------------------------------------
##contributers
${contributeinstructions}
##-----------------------------------------------------------------------
##Features
${featureinstructions}
##-----------------------------------------------------------------------
Generated using ValleyLeaf ReadMe Generator.


`
// For the above, I have 2 hurdles. 1. I need to figure out how to allow the user to insert image links. 2. I need to ensure that the finished file includes the licence badge.

inquirer
    .prompt([
        {
            type: 'input',
            // Above is what type of prompt we are doing.
            message: 'Project Name:',
            // Above is what is displayed in the promt. in this case it's project name, change it to be appropiate.
            name: 'projectname',
            // Above is what we refer back to to access the data.
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
            name: 'installationinstructions',
        },
        {
            type: 'input',
            message: 'Languages used:',
            name: 'usageinstructions',
        },
        {
            type: 'confirm',
            name: 'imageInsert',
            message: 'Would you like to add images?:',
            default: false,
        },
        {
            type: 'checkbox',
            name: 'licenceinstructions',
            message: 'What licence do you wish to use:',
            choices: ['MIT,','APACHE2.0','Boost1.0','MPL2.0','BSD3','None'],
        },
        {
            type: 'input',
            message: 'Contributers:',
            name: 'contributeinstructions',
        },
        {
            type: 'input',
            message: 'Features:',
            name: 'featureinstructions',
        },
    ])
    .then((inputs) => {
        console.log(inputs)
    const readMeContent = readMeGenerator(inputs)
    compileReadMeFile(readMeContent)
    fs.writeFile('./GeneratedFiles/README.md', compileReadMeFile, (err) =>
     err ? console.error(err) : console.log('ReadMe file Created!')
    )
});

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

            // * Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

            // * Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

            // * Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

            // * Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

            // * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. 
            // This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.