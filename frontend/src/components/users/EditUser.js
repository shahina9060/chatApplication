import React, { useState } from "react";
import API from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const EditUser = () => {
    const user = useSelector(store=>store.app.user)
   console.log("userid",user.id)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    role: user.role || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.put(`/users/${user.id}`, formData,{
        withCredentials: true,
      });
      alert("User updated successfully!");
       navigate('/profile')
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <form className="container p-4 mt-5 bg-light border rounded shadow width-50%" onSubmit={handleSubmit}>
      <h1  className="text-center p-10 mb-5">Update</h1>
      <div className="row g-3">
        <div className="col-12 col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="col-12 col-md-6 mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <select
            className="form-select"
            value={formData.role}
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
            Update
          </button>
        </div>
        
      </div>
    </form>
  );
};

export default EditUser;
