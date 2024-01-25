const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
function Manager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please input your name.",
    },
    {
      type: "input",
      name: "name",
      message: "Please input your id number.",
    },
    {
      type: "input",
      name: "name",
      message: "Please input your email.",
    },
    {
      type: "input",
      name: "name",
      message: "Please input your office number.",
    },
  ]);
}
function Engineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please input your name.",
    },
    {
      type: "input",
      name: "name",
      message: "Please input your id number.",
    },
    {
      type: "input",
      name: "name",
      message: "Please input your email.",
    },
    {
      type: "input",
      name: "name",
      message: "Please input your gitHub username.",
    },
  ]);
}
function Intern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please input your name.",
      },
      {
        type: "input",
        name: "name",
        message: "Please input your id number.",
      },
      {
        type: "input",
        name: "name",
        message: "Please input your email.",
      },
      {
        type: "input",
        name: "name",
        message: "Please input your school.",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
