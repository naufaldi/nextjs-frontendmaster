const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
// load env in folder
dotenvLoad()
const withEnv = nextEnv();

module.exports = withEnv()