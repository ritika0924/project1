import React, {  useState } from "react";
import BGImage from "../assets/login.gif";
import { MoveUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { POST } from "../helpers/Api";
import { BeatLoader } from "react-spinners";
import { AppContext } from "../helpers/MyContext";
import { useContext } from "react";
function Login() {
  const navigate = useNavigate()
  const {user,setUser}=useContext(AppContext)
  const [loading, setLoading] = useState(false);
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    POST("user/login", form)
      .then((data) => {
        localStorage.setItem("token",data.token)
        setUser(data.token)
        navigate("/profile")
        // console.log(data);
        alert("Login success");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-screen h-screen flex flex-row bg-indigo-400 ">
      <div className="w-1/2 h-screen bg-indigo-400 flex items-center justify-center ">
        <img src={BGImage} alt="login" />
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#" onSubmit={handleSubmit}>
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
              <b>Welcome Back!</b>
              <br />
              <small>Enter your credential to login</small>
            </h5>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full flex justify-center items-center  gap-2 text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {loading ? (
                <BeatLoader color="white" size={15} />
              ) : (
                <div className="flex flex-row justify-center items-center ">
                  Login to your account <MoveUpRight size={16} />
                </div>
              )}
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Do you have an account?{" "}
              <Link
                to="/register"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
