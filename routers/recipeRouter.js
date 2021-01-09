import express from "express";
import routes from "../routes";
import {
  upload,
  recipeDetail,
  editRecipe,
  deleteRecipe,
} from "../controllers/recipeController";

const recipeRouter = express.Router();

recipeRouter.get(routes.upload, upload);
recipeRouter.get(routes.recipeDetail, recipeDetail);
recipeRouter.get(routes.editRecipe, editRecipe);
recipeRouter.get(routes.deleteRecipe, deleteRecipe);

export default recipeRouter;
