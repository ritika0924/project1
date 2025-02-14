import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const GET = async (endpoint) => {
  try {
    const token = localStorage.getItem("token")
    const response = await axios.get(
      `${BASE_URL}${endpoint}`,
      
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization":token
          
        },
      }
    );
    if (response.status === 201 || response.status == 200) {
      return response.data;
    } else {
      throw new Error(JSON.stringify(response.data.message));
    }
  } catch (error) {
    if (error.response) {
      throw new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error("Internet connection error");
    }
  }
};
export const POST = async (endpoint, body) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${endpoint}`,
      { data: body },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201 || response.status == 200) {
      return response.data;
    } else {
      throw new Error(JSON.stringify(response.data.message));
    }
  } catch (error) {
    if (error.response) {
      throw new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error("Internet connection error");
    }
  }
};
export const UPLOAD = async (file) => {
  try {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "ojt_2025");
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/ddzbyjogu/image/upload`,
      form
    );
    return response.data.secure_url;
  } catch (error) {
    throw new Error("Image uploading error");
  }
};
