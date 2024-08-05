import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Opps! Page Not Found</h2>
            <Link to = "/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;