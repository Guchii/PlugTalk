const Sidebar = ({ toggleLogin }) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success"
        style={{ width: "280px", height: "100vh" }}
      >
        <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4" id="sidebarTitle" style={{fontFamily:"'Montserrat', sans-serif"}}>Plug Talk</span>
          <span className="px-4 d-inline-block">v 1.0.0</span>
        </span>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <span className="nav-link bg-warning text-dark" aria-current="page">
              Messages
            </span>
          </li>
          <li>
            <span className="nav-link text-white">Settings</span>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <span
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/05/051b51bf5c9c83e8bdc1071b49f8289072abcc5c_full.jpg"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>YourUserName</strong>
          </span>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <span className="dropdown-item">New project...</span>
            </li>
            <li>
              <span className="dropdown-item">Settings</span>
            </li>
            <li>
              <span className="dropdown-item">Profile</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <span className="dropdown-item" onClick={toggleLogin}>
                Sign out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
