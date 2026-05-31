import React from 'react'
import { Helmet } from 'react-helmet-async';
import HeaderBar from "./HeaderBar";
import "../stylesheets/genericRouter.scss"
import Footer from "./Footer";
import {static_links} from "../db/const";
import ComponentHeader from "./ComponentHeader";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Team from "./Team";
import PracticeAreas from "./PracticeAreas";
import OutstationService from "./OutstationService";
import Achievements from "./Achievements";
import ComingSoon from "./ComingSoon";
import Clientele from "./Clientele";
import OtherServices from "./OtherServices";

const SEO_META = {
    about_us: {
        title: "About Us | Nair & Associates",
        description: "Learn about Nair & Associates, a full-service law firm with decades of experience providing expert legal counsel and consultancy across India.",
        canonical: "https://www.nairandassociates.in/about_us"
    },
    areas_of_practice: {
        title: "Areas of Practice | Nair & Associates",
        description: "Explore 20+ practice areas at Nair & Associates including Civil, Criminal, Corporate, Intellectual Property, Taxation, Banking, Family Law and more.",
        canonical: "https://www.nairandassociates.in/areas_of_practice"
    },
    our_team: {
        title: "Our Team | Nair & Associates",
        description: "Meet the experienced legal professionals at Nair & Associates dedicated to providing expert legal counsel and representation across India.",
        canonical: "https://www.nairandassociates.in/our_team"
    },
    contact_us: {
        title: "Contact Us | Nair & Associates",
        description: "Get in touch with Nair & Associates for legal consultations. Find our office address, phone number and email contact details.",
        canonical: "https://www.nairandassociates.in/contact_us"
    },
    our_achievements: {
        title: "Our Achievements | Nair & Associates",
        description: "Explore the milestones and accomplishments of Nair & Associates across various areas of legal practice in India.",
        canonical: "https://www.nairandassociates.in/our_achievements"
    },
    "research_&_publications": {
        title: "Research & Publications | Nair & Associates",
        description: "Read research papers and legal publications authored by the team at Nair & Associates covering various areas of Indian law.",
        canonical: "https://www.nairandassociates.in/research_%26_publications"
    },
    our_clientele: {
        title: "Our Clientele | Nair & Associates",
        description: "Nair & Associates has served a diverse clientele including corporates, institutions and individuals across multiple industries in India.",
        canonical: "https://www.nairandassociates.in/our_clientele"
    },
    outstation_services: {
        title: "Outstation Services | Nair & Associates",
        description: "Nair & Associates provides legal services across multiple cities and states in India through its extensive outstation service network.",
        canonical: "https://www.nairandassociates.in/outstation_services"
    },
    other_services: {
        title: "Other Services | Nair & Associates",
        description: "Discover additional legal and consultancy services offered by Nair & Associates beyond our core practice areas.",
        canonical: "https://www.nairandassociates.in/other_services"
    },
    gallery: {
        title: "Gallery | Nair & Associates",
        description: "View photos and media from Nair & Associates events, milestones and achievements.",
        canonical: "https://www.nairandassociates.in/gallery"
    }
};
class GenericRouter extends React.Component {
    getCurrentRoute() {
        return this.props.current_path
    }

    getNameFromRoute() {
        if (this.getCurrentRoute() === "not_found") {
            return "Not Found"
        }
        return static_links.filter(link => link.key === this.getCurrentRoute())[0].name
    }

    getComponentToRender() {
        if (['gallery'].indexOf(this.getCurrentRoute()) > -1) {
            return <ComingSoon/>
        }
        if (this.getCurrentRoute() === "not_found") {
            return "Not Found"
        }
        if (this.getCurrentRoute() === "about_us") {
            return <AboutUs/>
        }
        if (this.getCurrentRoute() === "contact_us") {
            return <ContactUs/>
        }
        if (this.getCurrentRoute() === "our_team") {
            return <Team/>
        }
        if (this.getCurrentRoute() === "areas_of_practice") {
            return <PracticeAreas/>
        }
        if (this.getCurrentRoute() === "our_achievements" || this.getCurrentRoute() === "research_&_publications") {
            return <Achievements route={this.getCurrentRoute()}/>
        }
        if (this.getCurrentRoute() === "outstation_services") {
            return <OutstationService/>
        }
        if (this.getCurrentRoute() === "our_clientele") {
            return <Clientele/>
        }
        if (this.getCurrentRoute() === "other_services") {
            return <OtherServices/>
        }
    }

    render() {
        const meta = SEO_META[this.getCurrentRoute()] || {};
        return (
            <div className="generic-router">
                {meta.title && (
                    <Helmet>
                        <title>{meta.title}</title>
                        <meta name="description" content={meta.description} />
                        <link rel="canonical" href={meta.canonical} />
                    </Helmet>
                )}
                <HeaderBar/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <ComponentHeader name={this.getNameFromRoute()}/>
                        </div>
                    </div>
                    {this.getComponentToRender()}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default GenericRouter