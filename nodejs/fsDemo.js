/*
import fs from 'fs';

// readFile() - Callback
fs.readFile('siddhartha.txt', 'utf8', (err, data) => {

  if (err) throw err;
  console.log(data); 
});

// readFileSync() - Synchronous version (Blocking if trying to read large file)
const data = fs.readFileSync('siddhartha.txt', 'utf8');
console.log("Now SYNC -> \n" + data);
*/

import fs from 'fs/promises';

// readFile() - Promise .then()
//fs.readFile('siddhartha', 'utf8').then((data) => console.log(data)).catch((err) => console.log(err));

// readFile() async/await
const readFileAsync = async () => {

  try {
    const data = await fs.readFile('siddhartha.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readFileAsync();

