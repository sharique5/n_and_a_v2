import React from 'react'
import '../stylesheets/home.scss'
import {BsSearch} from "react-icons/bs";
import { Helmet } from 'react-helmet-async';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Helmet>
                    <title>Nair &amp; Associates | Legal Counsels and Consultants</title>
                    <meta name="description" content="Nair &amp; Associates is a full-service law firm providing expert legal counsel across Civil, Criminal, Corporate, IP, Taxation, Banking and 20+ practice areas. Serving clients across India." />
                    <link rel="canonical" href="https://www.nairandassociates.in/" />
                </Helmet>
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