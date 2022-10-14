const routes = require( 'next-routes' )
// import routes from 'next-routes'
module.exports = routes()
  // page routes
  // main routes
  .add( '/', 'Screen/HomeScreen' )
  .add( '/profile/:id', 'Screen/ProfileScreen' )
  .add( '/product-detail/:id', '/Screen/ProductDetail' )
  // .add(RoutePage.about.as, RoutePage.proFile.path)
  .add( '/about', '/Screen/About' )
  .add( '/contact', '/Screen/Contact' )
  .add( '/my-cart', '/Screen/MyCart' )
