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
        this.setCookie("n_and_a", "agreed", 1)
        this.setState({show: false})
    }

    setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie = cname => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    render() {
        if (!this.getCookie("n_and_a")) {
            return (
                <DisclaimerModal show={this.state.show} onHide={() => this.handleClose()} animation={false} backdrop='static'
                                 keyboard={false}/>
            )
        }
        return ""
    }
}

export default AppComponent