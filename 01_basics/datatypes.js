"use strict";
let foo= 34
console.log(foo);
foo=foo +"1";
console.log(foo);

console.log(+0==-0)  //equality check
console.log(0==="0") //string equality check

/*in "==", if one of the operands is null or undefined,
the other must also be null or undefined to return true.
Otherwise return false. */
console.log(null==null) //t
console.log(null==undefined) //t
console.log(0==false) //t
console.log(1=='1') //t

console.log(null===null) //t
console.log(undefined===undefined) //t
console.log(null===undefined) //f
console.log(0===false) //f
console.log(1==='1') //f

console.log(!null) //t