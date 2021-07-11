import React from "react";
import "../stylesheets/headerBar.scss";
import {static_links} from "../db/const";

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu: static_links.filter(link => link.is_nav),
            isNavVisible: false,
            isSmallScreen: false,
            toggle:false
        }
        this.setNavVisibility = this.setNavVisibility.bind(this)
        this.setIsSmallScreen = this.setIsSmallScreen.bind(this)
    }

    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    setNavVisibility = val => {
        this.setState({ isNavVisible: val })
    }

    setIsSmallScreen = val => {
        this.setState({ isSmallScreen: val })
    }

    useEffect = (() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(this.handleMediaQueryChange);
        this.handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(this.handleMediaQueryChange);
        };
    }, []);

    handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            this.setIsSmallScreen(true);
        } else {
            this.setIsSmallScreen(false);
        }
    };

    toggleNav = () => {
        this.setNavVisibility(!this.state.isNavVisible);
    }

    render() {
        return (
            <section className="navbar navbar-fixed-top custom-navbar" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.Toggle}>
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">
                            <div className="title">Nair & Associates</div>
                            <div className="tagline">Legal Counsels and Consultants</div>
                        </a>

                        {/*<a href="#" className="navbar-brand">Digital Team - {this.state.toggle ? "true" : "false"}</a>*/}
                    </div>
                    <div className={"collapse navbar-collapse " + (this.state.toggle ? "show-menu" : "hide-menu")}>
                        <ul className="nav navbar-nav navbar-right">
                            {
                                this.state.navMenu.map(item => (
                                    <li>
                                        <a href={"/"+item.key}>{item.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

        );
    }
}

export default HeaderBar