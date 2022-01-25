// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    var badges = {
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "GPLv2": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
        "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "BSD 3-Clause": "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        "none": ""
    }
    return badges[license]
}

// Create a function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
    var links = {
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "GPLv2": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
        "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "BSD 3-Clause": "![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        "none": ""
    }
    return links[license]
}

// Create a function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "none") {
        return "";
    } else {
        return `This repository is licensed under the ${data.license} license. ${renderLicenseLink}.`
    }
}


function generateMarkdown(data) {
    return `
${renderLicenseBadge}

# ${data.title}
    
## Description

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test Instructions](#test)
* [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## License

${renderLicenseSection}


## Contributing

${data.contributors}
    
    
## Test Instructions

${data.test}


## Questions

For questions about this repository, please contact me at ${data.email} or visit my GitHub page at [${data.username}]. 
    
`;
}

module.exports = generateMarkdown;