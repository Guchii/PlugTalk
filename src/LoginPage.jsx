import "./login.css";
const LoginPage = ({ toggleLogin }) => {
  return (
    <div className="login-container">
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#4CAB78" }}
      >
        <div className="container-fluid d-flex justify-content-center text-light">
          <span className="navbar-brand mb-0 h1 fs-1 text-white">
            Plug Talk
          </span>
        </div>
      </nav>
      <div
        className="container-fluid d-flex align-middle justify-content-center"
        style={{
          backgroundColor: " #04000A",
          height: "calc(100vh - 80px)",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="row">
          <div className="text-center">
            <form action="" className="col-12 p-5">
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="UserName#1231"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your password"
                />
              </div>
              <div className="btn-group">
                <button onClick={toggleLogin} className="btn btn-dark">
                  Login
                </button>
                <button onClick={toggleLogin} className="btn btn-dark">
                  Signup
                </button>
              </div>
            </form>
          </div>
          <div className="text-center">
            <p className="col-12 text-light fs-6">v 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
