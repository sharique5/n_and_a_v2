import React from 'react'
import {Button, Modal} from "react-bootstrap";

class DisclaimerModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClose() {
        this.setState({show: false})
    }

    handleShow(evt) {
        evt.preventDefault()
        this.setState({show: true})
    }

    render() {
        console.log(this.state.show)
        return (
            <>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
                </>
        )
    }
}

export default DisclaimerModal