const fs = require('fs');
const path = require('path');
const readline = require('readline');

function initializeScript(fileName, questionNumber) {
  const functionName = fileName.split('.')[0];

  const content = `
    // LeetCode Question #: ${questionNumber}

    function ${functionName}() {
        console.log("Hello from ${functionName} function!");
    }
    
    console.log(${functionName}());
   
  `;
  const filePath = path.join(__dirname, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`JavaScript file '${fileName}' initialized with function '${functionName}' for LeetCode question ${questionNumber}.`);
}

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ['Enter the function name: ', 'Enter LeetCode question #: '];
const answers = [];

function askQuestions(index) {
  if (index >= questions.length) {
    r1.close();
    const [functionName, questionNumber] = answers;
    initializeScript(functionName, questionNumber);
    return;
  }

  r1.question(questions[index], (answer) => {
    answers.push(answer);
    askQuestions(index + 1);
  });
}

askQuestions(0);