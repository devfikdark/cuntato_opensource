const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('DB connect success :)');
}).catch((err) => {
  console.log('Something problem to connect DB !!!');
});