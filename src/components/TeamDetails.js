import React from 'react'
import {Button, Modal} from "react-bootstrap";

class TeamDetails extends React.Component {
    render() {
        const member = this.props.member || {}
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="row justify-content-center text-center">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="person-image">
                                <img src={member.image || "https://i.ibb.co/G2CBWvb/person1.jpg"} alt={member.name}/>
                            </div>
                            <div className="person-info">
                                <p className="member-name">{member.name}</p>
                                <p className="speciality">{member.designation}</p>
                                <p>
                                    <a className="email" href={"mailto:" + member.email}>{member.email}</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 member-description" dangerouslySetInnerHTML={{ __html: member.description}}>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TeamDetails