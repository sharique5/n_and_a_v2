import React from "react";
import './style.scss';
import {FaSearch} from "react-icons/all";
import Services from "../Services/Services";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="home-container">
                <section id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <h3>Welcome to</h3>
                                <h1>Nair & Associates</h1>
                                <h6>ATTORNEY's AT LAW</h6>
                                <hr/>
                            </div>
                        </div>
                        <div className="searchBox">
                            <input className="searchInput" type="text" name="" placeholder="Search"/>
                            <button className="searchButton" href="#">
                                <FaSearch/>
                            </button>
                        </div>
                    </div>
                </section>
                <Services/>
            </div>

        )
    }
}

export default Home;