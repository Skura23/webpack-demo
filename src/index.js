import style from "./main.css";

console.log(`I'm a silly entry point`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

var domDiv = document.createElement('div')
domDiv.innerText = 'hello webpack12';
document.querySelectorAll('body')[0].appendChild(domDiv)
