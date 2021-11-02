import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register Page</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Your name</label>
              </small>
              <div className=""></div>
              <input
              value={name}
              onChange={e => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter name "
              />
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Email adress</label>
              </small>
              <div className=""></div>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email "
              />
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Password</label>
              </small>
              <div className=""></div>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password "
              />
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Pick a question</label>
              </small>
              <select name="" id="" className="form-control">
                <option> What is your favorite color?</option>
                <option> What is your best friend's name?</option>
                <option> What city you were born?</option>
              </select>
              <small className="form-text text-muted">
                You can use this to reset your password if forgotten.
              </small>
            </div>

            <div className="form-group p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Write your answer here.."
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary col-12">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
