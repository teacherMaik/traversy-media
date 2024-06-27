import os from 'os';

console.log(`User info is ${os.userInfo()}`)
console.log(`Total memory is ${os.totalmem()}`);
console.log(`Free memory is ${os.freemem()}`);
console.log(`CPUS -> ${os.cpus()}`);