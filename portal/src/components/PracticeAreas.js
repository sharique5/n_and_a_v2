import React from 'react'
import {static_content} from "../db/const";
import '../stylesheets/practiceAreas.scss'

class PracticeAreas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areas: static_content.area_of_practice
        }
    }
    render() {
        return (
            <div className="accordion">
                {
                    this.state.areas.map((area, index) => (
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

export default PracticeAreas