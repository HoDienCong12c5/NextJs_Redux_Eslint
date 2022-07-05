// server.js
// import 'dotenv/config'
const next = require('next')
require('dotenv').config()
const routes = require('../common/router')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const port = process.env.PORT || 3000
console.log('port', port)
// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(port)
})
