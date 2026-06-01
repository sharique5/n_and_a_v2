import React from 'react'
import '../stylesheets/home.scss'
import {BsSearch} from "react-icons/bs";
import { Helmet } from 'react-helmet-async';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Nair & Associates",
    "alternateName": "N & A",
    "url": "https://www.nairandassociates.in",
    "logo": "https://www.nairandassociates.in/logo192.png",
    "description": "Nair & Associates is a full-service law firm with over 17 years of experience providing expert legal counsel across 20+ practice areas in India.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
    },
    "email": "nair.associates@rediffmail.com",
    "areaServed": "IN",
    "serviceType": ["Civil Law", "Criminal Law", "Corporate Law", "Intellectual Property", "Taxation", "Banking Law", "Family Law", "Arbitration"]
};

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Helmet>
                    <title>Nair &amp; Associates | Legal Counsels and Consultants</title>
                    <meta name="description" content="Nair &amp; Associates — full-service law firm in Indore. Expert counsel in Civil, Criminal, Corporate, IP, Tax and 20+ practice areas across India." />
                    <link rel="canonical" href="https://www.nairandassociates.in/" />
                    <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
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