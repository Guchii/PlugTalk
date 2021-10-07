const Main = () => {
    return(
        <div className="d-flex justify-content-center">
            <h1 className="fs-2 text-light m-3">Hello this is main component</h1> 
            <input type="text" className="form-control bg-dark text-light position-absolute bottom-0 mb-3"
                style={{
                    width:"calc(100vw - 360px)"
                }}
                placeholder="Enter your message ..."
            />
        </div>
    )
}

export default Main;
