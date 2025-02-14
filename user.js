import { User } from "../models/user.js";
import { request, response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (request, response) => {
  try {
    const { email, password } = request.body.data;
    console.log(email);
    console.log(password);
    const user = await User.findOne({ email });
    if (user && user.verify(password)) {
      const token = jwt.sign({ id: user._id }, "MySecretKey", {
        expiresIn: "1h",
      });
      return response.status(200).send({ message: "Login successful", token });
    } else {
      return response.status(401).send({ message: "Wrong email or password" });
    }
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ message: "Internel error", error: error.message });
  }
};
export const register = async (request, response) => {
  console.log("someone is trying to register");
  const { name, password, email, phone, image } = request.body.data;
  try {
    const user = await User.findOne({ email });
    if (user)
      return response.status(400).send({ message: "User already exist" });
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      name,
      password: encryptedPassword,
      email,
      phone,
      image,
    });

    await newUser.save();
    return response.status(201).send("register success");
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ message: "Internel error", error: error.message });
  }
};
export const userprofile = async (request, response) => {
  try {
    const user = await User.findById(request.decodedUser.id).select(
      "name email image phone"
    );

    return response.status(200).send({ message: "Fetched user", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "internal error", error: error.message });
  }
};
