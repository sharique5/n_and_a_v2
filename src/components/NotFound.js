import React from 'react'
import { Redirect } from 'react-router'
import '../stylesheets/notFound.scss'

class NotFound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goBack: false
        }
    }

    handleClick = () => {
        this.setState({ goBack: true})
    }

    render() {
        if (this.state.goBack) {
            return <Redirect to="/"/>
        }
        return (
            <section className="container-fluid">
                <div className="row not-found">
                    <div className="col-md-12">

                        <h1>404</h1>
                        <h2><i className="fa fa-frown-o" aria-hidden="true"></i> Oh! The page cannot be found...</h2>
                        <h3>The link might be incorrect...</h3>
                        <h4>or the page was deleted</h4>
                        <button onClick={this.handleClick}>go back</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default NotFound