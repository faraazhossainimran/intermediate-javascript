// regular function 
function add (a , b){
    // const sum = a+b; 
    // return sum;
}
const result = add (4,6);

// function expression
const add2 = function (a,b) {
    return a+b;
}

// arrow function
const add3 = (a,b) => a+b;
const sum = add3(3,4)
// console.log(sum);

const multiply = (num1, num2) => num1* num2;
const mult = multiply(2,3)
// console.log(mult)




// custom console.log() for vs code Place your key bindings in this file to override the defaults
// source link - https://bobbyhadz.com/blog/vscode-shortcut-for-console-log
// [
//     {
//       "key": "ctrl+shift+j",
//       "command": "editor.action.insertSnippet",
//       "when": "editorTextFocus",
//       "args": {
//         "snippet": "console.log()$2;"
//       }
//     },
//   ]
  
