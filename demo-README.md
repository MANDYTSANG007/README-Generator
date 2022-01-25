
    function renderLicenseBadge(license) {
    var badges = {
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
        "GPLv2": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]",
        "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
        "BSD 3-Clause": "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]",
        "none": ""
    }
    return badges[license]
}

    # Demonstration README.md
    
    ## Description

    This is a sample README.md that is generated using the application


    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Test Instructions](#test)
    * [Questions](#questions)


    ## Installation

    To use this README Generator, run the following command in the terminal: node index.js


    ## Usage

    This is a sample README.md


    ## License

    function renderLicenseSection(license) {
    if (license === "none") {
        return "";
    } else {
        return `This repository is licensed under the ${data.license} license. ${renderLicenseLink}.`
    }
}


    ## Contributing

    Mandy Tsang
    
    
    ## Test Instructions

    To run test, run the following command in the terminal: npm run test


    ## Questions

    For questions about this repository, please contact me at mandy.tsang007@gmail.com or visit my GitHub page at [MANDYTSANG007]. 
    
    