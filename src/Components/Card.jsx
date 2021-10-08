const Card = ({ name }) => {
    return (
        <div
            class="card m-3 p-3 d-flex justify-content-center align-items-center text-wrap bg-primary text-light"
            style={{
                height: "150px",
                width: "200px",
            }}
        >
            <div class="card-title">{name}</div>
        </div>
    );
};

export default Card;
