import React from 'react'
import '../stylesheets/header.scss'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container header-container">
                    <h1 className="title">Nair &amp; Associates</h1>
                    <p className="tagline">Legal Counsels and Consultants</p>
                </div>
            </div>
        )
    }
}
export default Header