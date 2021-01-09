// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//  Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const MY_PAGE = "/my-page";
const EDIT_PROFILE = "/edit-profile";

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
  myPage: MY_PAGE,
  editProfile: EDIT_PROFILE,
  recipes: RECIPES,
  upload: UPLOAD,
  recipeDetail: RECIPE_DETAIL,
  editRecipe: EDIT_RECIPE,
  deleteRecipe: DELETE_RECIPE,
};

export default routes;
