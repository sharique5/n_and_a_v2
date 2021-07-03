import React from "react";
import './style.css';
import {GoLaw} from "react-icons/all";
import logo from '../../static/images/logo_invert.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="navbar navbar-fixed-top custom-navbar top-nav-collapse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                        </button>
                        {/*<a href="#" className="navbar-brand"><GoLaw/> Nair & Associates</a>*/}
                        <img src={logo} className="navbar-brand"/>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#" className="smoothScroll">0731 429 1119</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;