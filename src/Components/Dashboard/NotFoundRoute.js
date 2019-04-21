import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundRoute = () => {
    return (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content center">
                    <div className="card-title">404 - Page not found</div>
                    <div className="card-action">
                        <Link to="/"><button className="btn pink lighten-1 z-depth-0">Back to homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundRoute;