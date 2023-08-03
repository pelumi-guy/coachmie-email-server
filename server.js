// Express http server
const app = require('./app');
const dotenv = require('dotenv');

// Setting up config file
dotenv.config({ path: "config.env" })

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Email server listening on port ${port}`)
})
