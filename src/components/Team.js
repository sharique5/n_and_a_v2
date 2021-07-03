import React from 'react'
import {static_content} from "../db/const";
import '../stylesheets/team.scss';
import TeamDetails from "./TeamDetails";

class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: static_content.our_team,
            showMemberDetails: false,
            selectedMember: {}
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClose() {
        this.setState({showMemberDetails: false, selectedMember: {}})
    }

    handleShow(member) {
        this.setState({
            selectedMember: member,
            showMemberDetails: true
        })
    }

    render() {
        return (
            <section className="section-team">
                <TeamDetails show={this.state.showMemberDetails}  member={this.state.selectedMember} onHide={() => this.handleClose()} animation={false} />
                <div className="container">

                    <div className="row justify-content-center text-center">
                        <div className="col-md-12 col-lg-12">
                            <div className="header-section">
                                <h2 className="title">Let's meet with our team members</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {
                            this.state.teams.map(team => (
                                <div className="col-sm-6 col-lg-6 col-xl-6">
                                    <div className="single-person">
                                        <div className="person-image">
                                            <img src={team.image || "https://i.ibb.co/G2CBWvb/person1.jpg"} alt={team.name}/>
                                        </div>
                                        <div className="person-info">
                                            <h3 className="full-name" onClick={event => this.handleShow(team)}>{team.name}</h3>
                                            <span className="speciality">{team.designation}</span>
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

export default Team;