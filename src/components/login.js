import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [name, setName] = useState({ name: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setName({ name: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSubmitted(true);
    props.handleName(name);
  };

  useEffect(() => {
    setName(name);
    //console.log("useeffect", name);
  }, [name]);

  return (
    <div className="wrapper">
      <div className="login">
        <form>
          <big className="form-text text-muted">
            <p>Memory Game - Flags of the World</p>
          </big>
          <div className="form-group">
            <label>Name</label>
            <input
              type="name"
              className="form-control"
              onChange={handleChange}
              value={name.name}
            />
            {submitted && !name.name && (
              <span id="name-error">Please your name</span>
            )}
          </div>
          <button onClick={handleClick} className="btn btn-primary">
            <p>Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
