function generateMarkdown(data) {
    return `
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

    This repository is licensed under the ${data.license} license.


    ## Contributing

    ${data.contributors}
    
    
    ## Test Instructions

    ${data.test}


    ## Questions

    For questions about this repository, please contact me at ${data.email} or visit my GitHub page at [${data.username}]. 
    
    
    
    
    
    `;
}

module.exports = generateMarkdown;