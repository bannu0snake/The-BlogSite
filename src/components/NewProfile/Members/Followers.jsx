import { Avatar, Link } from "@mui/material";
const Followers = (props) => {
    const removeHandler = (index) => {
        const myArray = props.userInfo.followers.filter(
            (obj) => obj.id !== index
        );
        
        props.setUserData((prev) => ({ ...prev, followers: myArray }));
    };

    return (
        <div>
            <div className="container-fluid">
                <h4 style={{ paddingBottom: "0.5em" }}>Followers: {5} </h4>
                {props.userInfo.followers.map((item) => (
                    <div className="row" style={{ paddingBottom: "0.5em" }}>
                        <div className="col-2">
                            <Avatar src="/broken-image.jpg" />
                        </div>
                        <div className="col-6" style={{ paddingTop: "0.3em" }}>
                            <Link underline="none" color="black" href="#">
                                {item}
                            </Link>
                        </div>
                        <div className="col-4" style={{}}>
                            <button
                                className="btn btn-danger"
                                onClick={() => removeHandler(item)} //removing user by using their ids
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Followers;
