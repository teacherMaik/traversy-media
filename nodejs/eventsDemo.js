import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  
  console.log("Hello World and hello " + name);
}

function goodbyeHandler(name) {

  console.log(`Goodbye World and goodbye ${name}`)
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit Events

myEmitter.emit('greet', 'Fer');
myEmitter.emit('goodbye', 'Maik');