console.log('starting password manager ... ');

const storage = require('node-persist');

// initialize storage
storage.init();

const setData = async () => {
  await storage.setItem('firstName', 'Daniel');
  await storage.setItem('lastName', 'Landon');
};

// setData();

const readData = async () => {
  console.log(await storage.getItem('firstName'));
  console.log(await storage.getItem('lastName'));
};

readData();
