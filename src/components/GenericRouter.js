import React from 'react'
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
        return (
            <div className="generic-router">
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