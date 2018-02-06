'use strict'

const express = require('express')
const http = require('http')
const sio = require('socket.io')
const redis = require('socket.io-redis')
const cfg = require('../config')

const app = express()
const server = http.Server(app)
const io = sio(server)

io.adapter(redis(cfg.redis))

module.exports = {app, server, io}
