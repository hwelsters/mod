const jwt = require("jsonwebtoken");

function verify(req: any, res: any, next: any) {
  const token = req.cookies.access_token;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err : Error, user : any) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
}

module.exports = verify;
