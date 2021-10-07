import Messages from "./Messages"

const Main = () => {
    return(
    <>
            <h1 className="fs-2 text-light m-3 position-absolute text-dim">Hello this is main component</h1> 
        <div className="d-flex justify-content-center align-items-end" style={{
            height: '90vh'
        }}>
            <Messages />
            <input type="text" className="form-control bg-dark text-light position-absolute bottom-0 mb-3 fs-5"
                style={{
                    width:"calc(100vw - 360px)",
                    padding: '10px',
                }}
                placeholder="Enter your message ..."
            />
        </div>
        </>
    )
}

export default Main;
