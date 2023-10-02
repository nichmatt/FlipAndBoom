"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers");
const { errorHandler } = require("./middlewares");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

module.exports = { app };
