function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ## Description

    ${data.description}


    ## Table of Contents

    ${data.contents}
    

    ## Installation

    ${data.installation}


    ## Usage

    ${data.usage}


    ## License

    This repository is licensed under the ${data.license} license.


    ## Contributors

    ${data.contributors}
    
    
    ## Test Instructions

    ${data.test}


    ## Questions

    For questions about this repository, please contact me at ${data.email}.
    
    
    
    
    
    `;
}

module.exports = generateMarkdown;