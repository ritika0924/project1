import jwt from "jsonwebtoken"
  export const verifyLogin = async (request, response, next) => {
  const authorization = request.headers.authorization;
  try {
    if (authorization) {
      const decodedUser = await jwt.verify(authorization, "MySecretKey");
      request.decodedUser = decodedUser;
      next();
    } else {
      return res.status(404).send({ message: "Auth required" });
    }
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ message: "Internel error", error: error.message });
  }
};



