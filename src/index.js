import { v4 as uuidv4 } from 'uuid';
// const uuid = require('uuid');

const sayHello = () => {
  // const id = uuid.v4();
  const id = uuidv4();

  console.log('Hello from Node');
  console.log('id:', id);
};

sayHello();
