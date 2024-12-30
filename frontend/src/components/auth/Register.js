import React, { useState } from "react";
import API from "../../api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/register", formData,{
        withCredentials: true,
      });
      alert("User registered successfully!");
       navigate('/login')
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <form className="container p-4 mt-5 bg-light border rounded shadow width-50%" onSubmit={handleSubmit}>
      <h1  className="text-center p-10 mb-5">Register</h1>
      <div className="row g-3">
        <div className="col-12 col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
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
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
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
            Register
          </button>
        </div>
        <p>Have an account? <Link to="/login">Click here</Link></p>
      </div>
    </form>
  );
};

export default Register;
