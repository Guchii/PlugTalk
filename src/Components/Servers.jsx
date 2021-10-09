import { useSelector } from "react-redux";
import Card from "./Card";

const Servers = () => {
    const app = useSelector((state) => state.app);
    return (
        <div className="d-flex justify-content-start flex-wrap mt-5" style={{ height: "100%", maxWidth: "90%" }}>
            {app["servers"].map((server) => {
                return <Card name={server.name} />;
            })}
        </div>
    );
};

export default Servers;
