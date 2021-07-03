import React from 'react';
import './style.scss';
import {FaInfoCircle, BiDotsHorizontal, FaReadme, RiTeamFill, GrGallery, FaUsers, GiArchiveResearch, GiAchievement, GrBusinessService, GrServices, MdContactPhone} from "react-icons/all";

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: ['About Us', 'Areas of Practice', 'Our Team', 'Gallery', 'Our Clientele', 'Research & Publications', 'Our Achievements', 'Outstation Services', 'Other Services', 'Contact Us']
        }
    }

    getIcon(iconCategory) {
        switch(iconCategory) {
            case "About Us": return <FaInfoCircle size={40} />
            case "Areas of Practice": return <FaReadme size={40} />
            case "Our Team": return <RiTeamFill size={40} />
            case "Gallery": return <GrGallery size={40} />
            case "Our Clientele": return <FaUsers size={40} />
            case "Research & Publications": return <GiArchiveResearch size={40} />
            case "Our Achievements": return <GiAchievement size={40} />
            case "Outstation Services": return <GrBusinessService size={40} />
            case "Other Services": return <GrServices size={40} />
            case "Contact Us": return <MdContactPhone size={40} />
            default: return <BiDotsHorizontal size={40} />
        }
    }

    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        {
                            this.state.services.map(service => (
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">
                                            {this.getIcon(service)}
                                            <h3 className="card-title">{ service }</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        )
    }
}

export default Services;