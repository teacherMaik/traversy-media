console.log("Hello World");

/* Importing with common JS
const { genRandNum, celToFar, farToCel } = require('./utils');

console.log(`My random number is ${genRandNum()}`);

console.log(`67º farenheight is ${farToCel(67).toFixed(2)}º in felcius`);

console.log(`42º celcius is ${celToFar(42)}º in farenheight`); */

/* Importing as modules */
import { genRandNum, celToFar, farToCel } from "./utils.js";

/* Import as default function */
import getPosts from "./postController.js";

console.log(getPosts());

console.log(`My random number is ${genRandNum()}`);

console.log(`67º farenheight is ${farToCel(67).toFixed(2)}º in felcius`);

console.log(`42º celcius is ${celToFar(42)}º in farenheight`);