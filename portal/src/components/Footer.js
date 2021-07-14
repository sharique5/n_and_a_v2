import React from 'react'
import '../stylesheets/footer.scss'
import {BiCopyright} from "react-icons/all";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            // <div className="footer">
            //     <div className="row">
            //         <div className="col-md-8 col-sm-6 col-xs-12">
            //             <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
            //                 <a href="#">Scanfcode</a>.
            //             </p>
            //         </div>
            //
            //         <div className="col-md-4 col-sm-6 col-xs-12">
            //             <ul className="social-icons">
            //                 <li><a className="facebook" href="#"><FaFacebookF/></a></li>
            //                 <li><a className="twitter" href="#"><FaTwitter/></a></li>
            //                 <li><a className="linkedin" href="#"><FaLinkedin/></a></li>
            //             </ul>
            //         </div>
            //     </div>
            // </div>
            <>
                <footer>
                    <div className="copyright">
                        <p> <BiCopyright/> 2021 - Nair & Associates</p>
                    </div>
                    <div className="social">
                        <a href="#" className="linked">in</a>
                        <a href="#" className="email">@</a>
                        <a href="#" className="face">f</a>
                        {/*<a className="support" onClick={evt => this.handleShow(evt)}>Disclaimer</a>*/}
                        {/*<a href="#" className="tweet">t</a>*/}
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer