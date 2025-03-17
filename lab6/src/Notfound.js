import {Link} from 'react-router-dom';

function Notfound() {
    return(
        <div className="container text-center my-5">
            <h1>404: Page Not Found</h1>
            <Link to='/' className="btn btn-primary">Go back Home</Link>
        </div>
    );
}

export default Notfound;