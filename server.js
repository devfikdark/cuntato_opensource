require('./config/dbConfig');

const app = require('./app');

const port = process.env.PORT || 5012;
app.listen(port, () => {
  console.log(`Magic run on port ${port}`);
})