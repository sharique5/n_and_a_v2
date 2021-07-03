import React from 'react'
import {Button, Modal} from "react-bootstrap";

class DisclaimerModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Disclaimer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        In compliance with the rules of the Bar Council of India, this website of Nair & Associates (the "Firm")
                        is meant solely for information about the Firm, its practice areas, advocates and solicitors and not
                        for the purpose of advertising, soliciting work or inducement of any sort by the Firm or any of its
                        members. Nor is it to be constructed as legal advice if any nature or manner whatsoever.
                    </p>
                    <p>
                        The content of this website is also the intellectual Property of the Firm.
                    </p>
                    <p>
                        Please read and accept our website's Terms of Use and our Privacy Policy. By clicking on 'I AGREE'
                        below, the website visitor acknowledges that the information provided in is meant only for his/her
                        understanding of the Firm and its activities.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>I AGREE</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default DisclaimerModal