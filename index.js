const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
var bodyParser = require('body-parser')
const session = require("express-session");
const mongoStore = require("connect-mongo");

dotenv.config();
// const cron = require('node-cron');
const PORT = process.env.PORT || 9090
const app = express();
const routes = require('./routes/reminders.route')
const user_routes = require('./routes/user.route')
const session_routes = require('./routes/session.route')
const connect = require('./db/connect')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: { sameSite: "lax", maxAge: 1 * 60 * 60 * 10000 },
        store: new mongoStore({ mongoUrl: process.env.URL }),
    })
);

app.use('/v1/reminder', routes)
app.use('/v1/user', user_routes)
app.use('/v1/session', session_routes)


const startServer = async () => {
    try {
        await connect()
        app.listen(PORT, () => {
            console.log(`Connected on port ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}
startServer()
