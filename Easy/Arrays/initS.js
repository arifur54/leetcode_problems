const fs = require('fs');
const path = require('path');
const readline = require('readline');


function initializeScript(fileName) {
    const functionName = fileName.split('.')[0];

    const content = `
        function ${functionName}() {
            console.log("Hello from ${functionName} function!");
        }
        
        console.log(${functionName}())
    `;

    const filePath = path.join(__dirname, fileName);

    fs.writeFileSync(filePath, content);

    console.log(`JavaScript file '${fileName}' initialized with function '${functionName}'.`);
}

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Enter the function name: ', (functionName) => {
    r1.close();

    initializeScript(functionName);
})