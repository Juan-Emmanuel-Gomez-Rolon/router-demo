import { useNavigate } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

function App() {
  const profiles: string[] = ["mario", "luigi"];
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Main Page</h1>
        <select name="" id="" onChange={(e) => setName(e.target.value)}>
          <option value="">--- Select a Profile ---</option>
          {profiles.map((profile, idx) => (
            <option key={idx} value={profile}>
              {profile}
            </option>
          ))}
        </select>
        <br />
        {name !== "" && (
          <button
            style={{ marginTop: 20 }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
              navigate(`profile/${name}`);
            }}
          >
            Profile Page
          </button>
        )}
      </div>
    </>
  );
}

export default App;
