const routes = require('next-routes')
// import routes from 'next-routes'

module.exports = routes()
  // page routes
  // main routes
  .add('/', 'Screen/HomeScreen')
  .add('/profile/:id', 'Screen/ProfileScreen')
