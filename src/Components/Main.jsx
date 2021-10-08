import Messages from "./Messages";
import Servers from "./Servers"

const Main = () => {
  return (
    <>
      <h1 className="fs-2 m-3 position-absolute" style={{display:'none'}}>
        Hello this is main component
      </h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
        }}
      >
            <Servers/>
      </div>
    </>
  );
};

export default Main;
