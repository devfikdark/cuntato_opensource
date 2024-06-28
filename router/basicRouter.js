module.exports = (app) => {
  app.get("/", (req, res) => {
    res.header("Content-Type", "text/html");
    if (req.isAuthenticated()) {
      res.redirect("/dashboard");
      return;
    }
    res.render("index");
  });

  app.get("/profile", isLoggedIn, (req, res) => {
    res.header("Content-Type", "text/html");
    res.render("profile", {
      user: req.user,
    });
  });

  app.get("/dashboard", isLoggedIn, (req, res) => {
    res.header("Content-Type", "text/html");
    res.render("dashboard", {
      user: req.user,
    });
  });

  app.get("/project", isLoggedIn, (req, res) => {
    req.user.projectName = req.query.projectName;
    req.user.projectToken = req.query.projectToken;
    res.header("Content-Type", "text/html");
    res.render("project", {
      user: req.user,
    });
  });

  // Logout common
  app.get("/logout", (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}
