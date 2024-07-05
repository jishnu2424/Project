import React, { useState } from "react";
import "../Styles/designerreg.css";
import reg from "../Assets/register.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../Lib/ApiRequest";
import {toast} from 'react-toastify'

function DesignerRegister() {
  const navigate = useNavigate();
  const [regData, setregData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "designer" // Add userType here
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      regData.username === "" ||
      regData.email === "" ||
      regData.password === "" ||
      regData.confirmpassword === ""
    ) {
      alert("Complete the form");
      return;
    }
    if (regData.password !== regData.confirmpassword) {
      alert("Password mismatch");
      return;
    }
    console.log(regData);
    setregData({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      userType: "designer" // Reset userType as well
    });
    try {
      const response = await ApiRequest.post(
        "auth/add/user",
        regData
      );
      const result = response.data;
      console.log(result);
      if (response.status === 200) {
        toast.success('Successfully Registered')
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "black", height: "800px" }}>
        <img
          src={reg}
          alt=""
          style={{ marginLeft: "800px", marginTop: "200px" }}
        />
        <h1 className="dh1">Create your account as Designer</h1>
        <form className="dserreg" onSubmit={handleSubmit}>
          <label htmlFor="" className="dl1">
            UserName
          </label>
          <input
            type="text"
            placeholder="UserName"
            className="uinp"
            value={regData.username}
            onChange={(e) => {
              setregData({ ...regData, username: e.target.value });
            }}
          />
          <label htmlFor="" className="dl1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="uinp"
            value={regData.email}
            onChange={(e) => {
              setregData({ ...regData, email: e.target.value });
            }}
          />
          <label htmlFor="" className="dl1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="uinp"
            value={regData.password}
            onChange={(e) => {
              setregData({ ...regData, password: e.target.value });
            }}
          />
          <label htmlFor="" className="dl1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="uinp"
            value={regData.confirmpassword}
            onChange={(e) => {
              setregData({ ...regData, confirmpassword: e.target.value });
            }}
          />
          <input type="hidden" value={regData.role} />
          <br />
          <br />
          <Button className="db1" type="submit">
            Register
          </Button>
        </form>
      </div>
    </>
  );
}

export default DesignerRegister;
