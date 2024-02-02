const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Function to prompt manager
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please input manager name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please input manager id number.",
      },
      {
        type: "input",
        name: "email",
        message: "Please input manager email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please input manager office number.",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptTeamMember(); //function call to add new team members
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// function to prompt user for team member details
function promptTeamMember() {
  inquirer
    .prompt([
      // inquirer questions to choose team member type
      {
        type: "list",
        name: "teamMemberType",
        message: "Choose a team member type:",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((answers) => {
      if (answers.teamMemberType === "Finish building team") {
        //Generate HTML and write to file
        const renderHTML = render(teamMembers);
        fs.writeFileSync("./output/team.html", renderHTML);
        console.log("HTML file generated successfully.");
      } else if (answers.teamMemberType === "Engineer") {
        promptEngineer();
      } else if (answers.teamMemberType === "Intern") {
        promptIntern();
      }

    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please input engineer name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please input engineer id number.",
      },
      {
        type: "input",
        name: "email",
        message: "Please input engineer email.",
      },
      {
        type: "input",
        name: "github",
        message: "Please input engineer gitHub username.",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptTeamMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
  function promptIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please input intern name.",
        },
        {
          type: "input",
          name: "id",
          message: "Please input intern id number.",
        },
        {
          type: "input",
          name: "email",
          message: "Please input intern email.",
        },
        {
          type: "input",
          name: "school",
          message: "Please input the name of intern school.",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamMembers.push(intern);
        promptTeamMember();
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
  }
