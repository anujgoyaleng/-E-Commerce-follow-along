const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

/**
 * @route   POST /create-user
 * @desc    Register a new user
 * @access  Public
 */
router.post(
  "/create-user",
  upload.single("file"), // Expect file to be named "file"
  catchAsyncErrors(async (req, res, next) => {
    console.log("Creating user...");
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      if (req.file) {
        const filepath = path.join(__dirname, "../uploads", req.file.filename);
        try {
          fs.unlinkSync(filepath); // Delete uploaded file if user already exists
        } catch (err) {
          console.log("Error removing file:", err);
          return res.status(500).json({ message: "Error removing file" });
        }
      }
      return next(new ErrorHandler("User already exists", 400));
    }

    // Set default avatar object
    let avatar = { url: "", public_id: "" };

    // Handle file upload (local storage)
    if (req.file) {
      avatar = {
        url: path.join("uploads", req.file.filename), // Local path
        public_id: req.file.filename, // Placeholder, update if using Cloudinary
      };
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      avatar,
    });

    res.status(201).json({ success: true, user });
  })
);

/**
 * @route   POST /login
 * @desc    Login user
 * @access  Public
 */
router.post(
  "/login",
  catchAsyncErrors(async (req, res, next) => {
    console.log("Logging in user...");
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    console.log("At Auth", "Password: ", password, "Hash: ", user.password);
    console.log(isPasswordMatched);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    // Remove password from response
    user.password = undefined;

    res.status(200).json({
      success: true,
      user,
    });
  })
);

module.exports = router;
