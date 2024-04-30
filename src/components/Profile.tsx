import { Outlet, useNavigate, useParams } from "react-router-dom";
import Luigi from "./Luigi";
import Mario from "./Mario";
import React from "react";

const Profile = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>Profile</h1>
      <Outlet />
      <ul>
        <li>{name == "mario" ? <Mario /> : <Luigi />}</li>
      </ul>
      <button onClick={handleClick}>Back Home</button>
    </div>
  );
};

export default Profile;
