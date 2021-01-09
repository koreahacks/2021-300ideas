// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//  Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const MY_PAGE = "/my-page";

// Recipe
const RECIPES = "/recipes";
const UPLOAD = "/upload";
const RECIPE_DETAIL = "/:id";
const EDIT_RECIPE = "/:id/recipe";
const DELETE_RECIPE = "/:id/recipe";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  myPage: MY_PAGE,
  recipes: RECIPES,
  upload: UPLOAD,
  recipeDetail: RECIPE_DETAIL,
  editRecipe: EDIT_RECIPE,
  deleteRecipe: DELETE_RECIPE,
};

export default routes;
