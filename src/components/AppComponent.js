import React from 'react'
import Home from "./Home";
import DisclaimerModal from "./DisclaimerModal";
import Header from "./Header";

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose() {
        this.setState({show: false})
    }

    render() {
        return (
            <>
                <Home />
                <DisclaimerModal show={this.state.show} onHide={() => this.handleClose()} animation={false} backdrop='static'
                                 keyboard={false}/>
            </>
        )
    }
}

export default AppComponent