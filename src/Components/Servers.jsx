import { useSelector } from "react-redux";
import Card from "./Card";

const Servers = () => {
    const app = useSelector((state) => state.app);
    return (
        <div className="" style={{ height: "100%", width: "100%" }}>
            {app["servers"].map((server) => {
                return <Card name={server.name} />;
            })}
        </div>
    );
};

export default Servers;
