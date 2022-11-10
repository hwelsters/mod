const jwt = require("jsonwebtoken");

function verify(req: any, res: any, next: any) {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err : Error, user : any) => {
      if (err) return res.status(403).json("Token is not valid!");
      req.user = user;
      console.log(req.user);
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
}

export default verify;