import React from 'react'
import {other_services} from "../db/const";
import '../stylesheets/otherServices.scss';
import '../stylesheets/practiceAreas.scss';

class OtherServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: other_services
        }
    }

    render() {
        return (
            <div className="other-services accordion">
                {
                    this.state.services.map((area, index) => (
                        <div className="accordion-item">
                            <input type="checkbox" id={"accordion" + index}/>
                            <label htmlFor={"accordion"+index} className="accordion-item-title">
                                <span className="icon"></span>{area.name}</label>
                            <div className="accordion-item-desc" dangerouslySetInnerHTML={{ __html: area.value }}></div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default OtherServices;