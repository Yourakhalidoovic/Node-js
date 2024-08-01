export default function isAuthenticated(req, res, next) {
  const token = req.body.token;
  try {
    const data = jwt.verify(token, "jwtsecret");
    console.log(data);
    res.send({
      message: "this is a secret message",
    });
  } catch (error) {
    res.send({
      message: "you are not authorized",
    });
  }
}
