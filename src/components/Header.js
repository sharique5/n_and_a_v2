import React from 'react'
import '../stylesheets/header.scss'
import logo from '../static/images/logo_invert.png'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container header-container">
                    <div className="title">Nair & Associates</div>
                    <div className="tagline">Legal Counsels and Consultants</div>
                </div>
            </div>
        )
    }
}
export default Header