// Import the fs module using require
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkDown = require("./Develop/utils/generateMarkdown.js");        //read and execute the file


//prompt the user to answer the following questions
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
            type: "input",
            message: "What is your email address?",
            name: "email"
    },
    {
            type: "input",
            message: "What is your project's title?",
            name: "title"
    },
        {
            type: "input",
            message: "Please write your project's description.",
            name: "description"
        },
        {
            type: "input",
            message: "What are your project's installation instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is your project's usage information?",
            name: "usage"
        },
        {
            type: "list",
            message: "What license should your project include?",
            name: "license",
            choices: ["MIT", "GPLv2", "Apache", "BSD 3-Clause", "none"]
        },
        {
            type: "input",
            message: "Who are the contributors?",
            name: "contributors"
        },
        {
            type: "input",
            message: "What is your project's test instructions?",
            name: "test"
        },
        {
            type: "input",
            message: "Any questions about this repository?",
            name: "questions"
        },
];

//function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
    })
};

function init(){
    inquirer.prompt(questions)
    .then((answers) => {
        let markDownContent = generateMarkDown(answers);          //Pass answers to generateMD function
        writeToFile("demo-README.md", markDownContent)
        console.log(answers);
    });
};

//call function to initialize application
init();




























// 
// GIVEN a command-line application that accepts user input
//WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//WHEN I enter my project title
//THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README





















