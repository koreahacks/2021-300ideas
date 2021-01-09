import routes from "./routes";

const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = 1;
  next();
};

export default localsMiddleware;
