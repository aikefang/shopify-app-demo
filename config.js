// const development = require('./config-development')
// const production = require('./config-production')
const config = process.env.NODE_ENV == 'development' ? require('./config-development') : require('./config-production')
module.exports = config
