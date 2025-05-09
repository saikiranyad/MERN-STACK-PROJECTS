const express = require("express");
const {
  getNotifications,
  markAsRead,
  markAllAsRead,
} = require("../controllers/notificationController");

const authuser = require("../middlewares/userAuth");

const notificationrouter = express.Router();

notificationrouter.get("/notifications", authuser, getNotifications);
notificationrouter.put("/notifications/read/:id", authuser, markAsRead);
notificationrouter.put("/notifications/read", authuser, markAllAsRead);

module.exports = notificationrouter;
