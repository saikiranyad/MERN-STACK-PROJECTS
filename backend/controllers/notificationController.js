const Notification = require("../models/notificationModel");

// Get notifications with pagination
const getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const notifications = await Notification.find({ to: userId })
      .populate("from", "name avatar")
      .populate("product", "name images")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Notification.countDocuments({ to: userId });

    res.status(200).json({
      success: true,
      message: "Notifications fetched successfully",
      notifications,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error("Error in getNotifications:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error while fetching notifications",
    });
  }
};

// Mark a single notification as read
const markAsRead = async (req, res) => {
  try {
    const notificationId = req.params.id;

    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification marked as read",
      notification,
    });
  } catch (err) {
    console.error("Error in markAsRead:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error while marking notification as read",
    });
  }
};

// Mark all notifications as read for the current user
const markAllAsRead = async (req, res) => {
  try {
    const userId = req.user.id;

    await Notification.updateMany({ to: userId, read: false }, { read: true });

    res.status(200).json({
      success: true,
      message: "All notifications marked as read",
    });
  } catch (err) {
    console.error("Error in markAllAsRead:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error while marking all notifications as read",
    });
  }
};

module.exports = {
  getNotifications,
  markAsRead,
  markAllAsRead,
};
