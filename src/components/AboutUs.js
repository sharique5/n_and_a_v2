import React from 'react'
import {static_content} from "../db/const";
import '../stylesheets/aboutUs.scss'

class AboutUs extends React.Component {
    render() {
        const data = static_content.about_us
        return (
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <div dangerouslySetInnerHTML={{__html: data}} className="about_us"/>
                </div>
            </div>
        )
    }
}

export default AboutUs