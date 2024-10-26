import { Router } from "express";
import { userSignupController } from "../controllers/user/signup.controller";
import { userLoginController } from "../controllers/user/login.controller";
import { getAllusers } from "../controllers/user/getAllusers";
import { checkIsAdmin } from "../middlewares/checkIsAdmin";
import { userLogoutController } from "../controllers/user/logout.controller";
import { userGetController } from "../controllers/user/getuser.controller";
import { checkUserStatus } from "../middlewares/checkUserStatus";
import { checkUserStatusForLogin } from "../middlewares/checkStatusLogin";

const userRouter = Router();

userRouter.route("/").get(checkIsAdmin, getAllusers);
userRouter.post(`/login`, checkUserStatusForLogin, userLoginController);
userRouter.post(`/signup`, userSignupController);
userRouter.delete(`/logout`, userLogoutController);
userRouter.get(`/get-usr`, checkUserStatus, userGetController);
