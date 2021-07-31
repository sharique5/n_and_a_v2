import React from 'react'
import {our_achievements, research_and_publications} from "../db/const";
import '../stylesheets/achievements.scss';
import {MdOpenInNew} from "react-icons/all";

class Achievements extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.route === "our_achievements" ? our_achievements : research_and_publications
        }
    }

    render() {
        return (
            <div className="row publication-comp">
                <div className="col-sm-12 col-lg-12 col-xs-12">
                    {
                        this.state.list.map(achievement => (
                            <div className="publication">
                                <div dangerouslySetInnerHTML={{ __html: achievement.description }} />
                                {
                                    achievement.link && <a href={achievement.link} target="_blank">
                                        See publication
                                        <MdOpenInNew/>
                                    </a>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Achievements