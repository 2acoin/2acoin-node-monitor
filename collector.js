// Copyright (c) 2019, The TurtleCoin Developers
//
// Please see the included LICENSE file for more information.

'use strict'

require('dotenv').config()
require('colors')
const Collector = require('./lib/collector.js')
const util = require('util')

/* Set up simple logger object */
const Logger = {
  log: function (message) {
    console.log(util.format('%s: %s', (new Date()).toUTCString(), message).green)
  },
  warn: function (message) {
    console.warn(util.format('%s: %s', (new Date()).toUTCString(), message).yellow)
  },
  error: function (message) {
    console.error(util.format('%s: %s', (new Date()).toUTCString(), message).red)
  }
}

const service = new Collector({
  nodeList: process.env.NODE_LIST_URL || 'https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json',
  pollingInterval: process.env.POLLING_INTERVAL || 120,
  updateInterval: process.env.UPDATE_INTERVAL || (60 * 60),
  historyDays: process.env.HISTORY_DAYS || 0.25,
  database: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USERNAME || false,
    password: process.env.MYSQL_PASSWORD || false,
    database: process.env.MYSQL_DATABASE || false,
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT || 10,
    socketPath: process.env.MYSQL_SOCKET || false
  }
})

service.on('error', err => Logger.error(err))
service.on('info', info => Logger.log(info))
service.on('update', list => Logger.log(util.format('Found %s public nodes', list.length)))

service.start()
