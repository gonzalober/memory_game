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
    console.log("HANDLE CLICK", name);
  };

  useEffect(() => {
    setName(name);
    console.log("useeffect", name);
  }, [name]);

  return (
    <div className="wrapper">
      <div className="login">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="name"
              className="form-control"
              onChange={handleChange}
              value={name.name}
            />
            {submitted && !name.name && (
              <span id="name-error">Please enter a first name</span>
            )}

            <small className="form-text text-muted">
              This is a memory game
            </small>
          </div>
          <button onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
