import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Chat from "./components/users/Chat";
import Navbar from "./components/Navbar";
import Profile from "./components/users/Profile";
import { Toaster } from 'react-hot-toast';
import EditUser from "./components/users/EditUser";
import InputText from "./components/InputText";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/edituser" element={<EditUser/>} />
        <Route path="/inputtext" element={<InputText/>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
