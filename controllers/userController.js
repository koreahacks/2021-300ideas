export const join = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const login = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const userDetail = (req, res) => res.send("회원 정보");

export const editProfile = (req, res) => res.send("회원 정보 수정");
