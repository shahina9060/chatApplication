import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate,  } from "react-router-dom";
import API from "../../api";

const Profile = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate()
  
  const handleDelete = () => {
    API.delete(`/users/${user.id}`);
    alert("user deleted successfully")
    navigate('/login')
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Profile</h1>
      <p className="text-center text-muted">
        This is the profile page where user details are displayed.
      </p>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>
                <div className="d-flex gap-2">
                  <Link to="/edituser">
                    <button className="btn btn-primary btn-sm">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
