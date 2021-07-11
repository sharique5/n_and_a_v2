import React from 'react'
import {our_achievements} from "../db/const";
import '../stylesheets/achievements.scss';

class Achievemets extends React.Component {
    render() {
        return (
            <div className="row achievement-comp">
                <div className="col-sm-12 col-lg-12 col-xs-12">
                    {
                        our_achievements.map(achievement => (
                            <div className="publication">
                                <div dangerouslySetInnerHTML={{ __html: achievement.description }} />
                                {
                                    achievement.link && <a href={achievement.link} target="_blank">Click here</a>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Achievemets