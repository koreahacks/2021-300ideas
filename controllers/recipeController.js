export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const search = (req, res) => {
  res.render("search", { pageTitle: "레시피 검색" });
};

export const upload = (req, res) => {
  res.render("upload", { pageTitle: "레시피 업로드" });
};

export const recipeDetail = (req, res) => {
  res.render("recipe Detail", { pageTitle: "레시피제목불러올예정" });
};

export const editRecipe = (req, res) => {
  res.render("editRecipe", { pageTitle: "레시피 수정" });
};

export const deleteRecipe = (req, res) => {
  res.render("deleteRecipe", { pageTitle: "레시피 삭제" });
};
