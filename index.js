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










































