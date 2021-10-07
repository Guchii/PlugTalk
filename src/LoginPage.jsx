import "./login.css";
const LoginPage = ({ toggleLogin }) => {
  return (
    <div className="login-container">
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#4CAB78" }}
      >
        <div className="container-fluid d-flex justify-content-center text-light">
          <span className="navbar-brand mb-0 h1 fs-2 text-white">
            Plug Talk
          </span>
        </div>
      </nav>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: " #04000A",
          height: "calc(100vh - 80px - 56px)",
          margin: 0,
          padding: 0,
        }}
      >
          <div className="text-center">
            <form action="" className="">
              <div className="mb-3">
                <input
                  className="form-control bg-dark text-light"
                  type="text"
                  placeholder="UserName#id"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control bg-dark text-light"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div className="btn-group mt-2">
                <button onClick={toggleLogin} className="btn btn-dark">
                  Login
                </button>
                <button onClick={toggleLogin} className="btn btn-dark">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      <footer class="footer mt-auto py-3 bg-dark">
        <div class="container d-flex justify-content-end">
          <span class="text-muted">v 1.0.0</span>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
