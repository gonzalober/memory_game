import React, { useState, useEffect } from "react";

const Login = ({ handleName }) => {
  const [name, setName] = useState({ name: "" });

  const handleChange = (e) => {
    setName({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleName(name);
  };

  useEffect(() => {
    setName(name);
  }, [name]);

  return (
    <div className="wrapper">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Memory Game - Flags of the World</h1>
          <div className="form-group">
            <label>Name </label>
            <input
              required={true}
              type="name"
              className="form-control"
              onChange={handleChange}
              value={name.name}
            />
          </div>
          <button className="btn-primary">
            <p>Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
