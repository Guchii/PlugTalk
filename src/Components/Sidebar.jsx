const Sidebar = ({toggleLogin}) => {
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <h2>Plug Talk</h2>
                <button onClick={toggleLogin}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;

