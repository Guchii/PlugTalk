const Card = ({ name }) => {
    return (
        <div
            class="card d-flex justify-content-center align-items-start m-3 text-wrap bg-warning text-dark"
            style={{
                height: "50px",
                width: "250px",
            }}
        >
            <div class="card-body">{name}</div>
        </div>
    );
};

export default Card;
