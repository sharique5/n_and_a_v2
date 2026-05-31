import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../stylesheets/notFound.scss'

function NotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className="container-fluid">
            <div className="row not-found">
                <div className="col-md-12">

                    <h1>404</h1>
                    <h2><i className="fa fa-frown-o" aria-hidden="true"></i> Oh! The page cannot be found...</h2>
                    <h3>The link might be incorrect...</h3>
                    <h4>or the page was deleted</h4>
                    <button onClick={handleClick}>go back</button>
                </div>
            </div>
        </section>
    )
}

export default NotFound