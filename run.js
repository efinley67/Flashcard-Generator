var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
var fs = require("fs");
var basicArray = [];
var clozeArray = [];
var nodeArgs = process.argv;

console.log("Welcome! Please run the program with one of the following commands: 'create-basic', 'create-cloze', 'run-basic', 'run-cloze'.");

if (nodeArgs[2] === "create-basic") {
  readBasic();
  createBasic();
} else if (nodeArgs[2] === "create-cloze") {
  readCloze();
  createCloze();
} else if (nodeArgs[2] === "run-basic") {
  runBasic();
} else if (nodeArgs[2] === "run-cloze") {
  runCloze();
}

function readBasic(file) {
  basicArray = [];
  fs.readFile("basic.txt", "utf8", function (err, data) {
    if(err) throw err;
    var basicData = data;
      for (var i = 0; i < basicData.length; i++) {
        basicArray.push(basicData[i]);
      }
  });
};

function readCloze() {
  fs.readFile("cloze.txt", "utf8", function(err, data) {
    if(err) throw err;
    var clozeData = data;
      for (var i = 0; i < clozeData.length; i++) {
        clozeArray.push(clozeData[i]);
      }
  });
};

function writeFile(file, info) {
  fs.writeFile(file, info, function(err) {
    if(err) throw err;
  });
}

  function createBasic() {
    inquirer
      .prompt([
        {
          name: "front",
          message: "Please enter the front of the card.",
          validate: function(input) {
            if (input === "") {
              console.log("Please enter a question.");
              return false;
            } else {
              return true;
            }
          }
        },
        {
        name: "back",
        message: "Please enter the back of the card.",
        validate: function(input) {
          if (input === "") {
            console.log("Please enter a question.");
            return false;
          } else {
            return true;
          }
        }
        },
        {
        type: "confirm",
        name: "createMore",
        message: "Make another card (Press Enter for YES)?",
        default: true
        }
      ]).then(function(inquirerResponse) {
        var newBasic = new BasicCard(inquirerResponse.front, inquirerResponse.back);
        basicArray.push(newBasic);
        writeFile("basic.txt", basicArray);
      });
  }

function runBasic() {
  for (var i = 0; i < basicArray.length; i++) {
    console.log(BasicCard.front);
    console.log("--------------------------------------------");
    console.log("--------------------------------------------");
    console.log("--------------------------------------------");
    console.log("--------------------------------------------");
    console.log("--------------------------------------------");
    console.log(BasicCard.back);
  }
}
