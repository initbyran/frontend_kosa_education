// hoisting ; var, let, const

let myVar = 1; // global variable

{    let myVar = 100; console.log(myVar);
   // block 내부에서 hoisting 발생
}

console.log(myVar);
