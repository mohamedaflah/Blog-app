import { Router } from "express";
import { createBlog } from "../controllers/blog/create-blog.controller";
import { checkUserStatus } from "../middlewares/checkUserStatus";
import { deleteBlogController } from "../controllers/blog/delete-blog.controller";
import { updateBlogController } from "../controllers/blog/update-blog.controller";
import { updateBlogViewCount } from "../controllers/blog/updateViewCount";
import { updateBlogLike } from "../controllers/blog/updateLikeCount";
import { updateBlogStatus } from "../controllers/blog/update-status.controller";
import { getAllBlogForUsers } from "../controllers/blog/getAllBlogsForeUsers";
import { checkIsAdmin } from "../middlewares/checkIsAdmin";
import { getAllBlogForAdmin } from "../controllers/blog/getAllBlogforAdmin";

const blogRoute = Router();

blogRoute
  .route(`/`)
  .post(checkUserStatus, createBlog)
  .delete(checkUserStatus, deleteBlogController)
  .put(checkUserStatus, updateBlogController)
  .get(getAllBlogForUsers);

blogRoute.get(`/getblogs-admin`, checkIsAdmin, getAllBlogForAdmin);
blogRoute.patch(`/update-status`, checkUserStatus, updateBlogStatus);
blogRoute.patch(`/update-view`, checkUserStatus, updateBlogViewCount);
blogRoute.patch(`/update-likes`, checkUserStatus, updateBlogLike);

export default blogRoute