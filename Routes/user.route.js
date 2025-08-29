import express from "express";
import {
  loginSkipper,
  userSignup,
  userLogin,
  homePage,
  verifyEmail,
  resendOTP,
} from "../Controller/user.controller.js";
import { ensureAuth } from "../Middleware/auth.middleware.js";
const userRouter = express.Router();

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/resend-OTP", resendOTP);
userRouter.get('/test', (req,res)=> {
  res.cookie('refreshToken' , "adkjhgwdtgauwghusy",{
        secure: false, // true if using HTTPS
        maxAge: 24 * 7 * 60 * 60 * 1000,
        httpOnly: true, // for security, set to true
        sameSite: "Strict", // or 'Strict' if using HTTPS and cross-origin
      }).send('send')
})

// Protected Route
userRouter.get("/auth", loginSkipper); //Login Page Skip Route
userRouter.get("/api", ensureAuth, homePage); // User authenticated filter

export default userRouter;
