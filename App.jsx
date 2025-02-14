import React, { useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import { AppContext } from "./helpers/MyContext";
import { useContext } from "react";
import Dash from "./pages/Dashboard/Dash";
function App() {
  const { user, setUser } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={user ? <UserProfile /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <div>
        <Dash/>
      </div>
    </BrowserRouter>
  );
}

export default App;
