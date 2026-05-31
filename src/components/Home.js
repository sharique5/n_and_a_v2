import React from 'react'
import '../stylesheets/home.scss'
import {BsSearch} from "react-icons/bs";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="container">
                    <div className="row search-row">
                        <div className="col-sm-12">
                            <form>
                                <div className="input-group">
                                    <span className="input-group-addon"><BsSearch/></span>
                                    <input type="text" className="form-control" placeholder="Search Website"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Navigation/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home