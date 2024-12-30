import React, { useState } from "react";
import API from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/login", formData,{
        withCredentials: true
      });
      console.log(response)
      alert("User login successfully!");
      navigate('/chat')
      dispatch(setUser(response.data.user))
      localStorage.setItem("user",response.data.user.name)
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <form className="container p-4 mt-5 bg-light border rounded shadow width-50%" onSubmit={handleSubmit}>
      <h1  className="text-center p-10 mb-5">Login</h1>
      <div className="row g-3">
    
        <div className="col-12 col-md-6 mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      
        <div className="col-12 col-md-6">
          <select
            className="form-select"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="">choose role</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Institute">Institute</option>
          </select>
        </div>
        <div className="col-12 mt-5">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </div>
        <p>New user ? <Link to="/register">Click here</Link></p>
      </div>
    </form>
  );
};

export default Login;
