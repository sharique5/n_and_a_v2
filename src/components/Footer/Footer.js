import React, {useState} from 'react'
import './style.scss'
import {BiCopyright} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
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
                        <a className="support" onClick={evt => this.handleShow(evt)}>Disclaimer</a>
                        <a href="#" className="face">f</a>
                        <a href="#" className="tweet">t</a>
                        <a href="#" className="linked">in</a>
                    </div>
                </footer>

                <Modal show={this.state.show} onHide={this.handleClose} style={{opacity:1}} size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                       animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Disclaimer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>User Acknowledgement</h4>
                        <p>By proceeding further and clicking on the "AGREE" button herein below, I
                            acknowledge that I of my own accord wish to know more about Nishith Desai Associates for my
                            own information and use. I further acknowledge that there has been no solicitation,
                            invitation or inducement of any sort whatsoever from Nishith Desai Associates or any of its
                            members to create an Attorney-Client relationship through this knowledgesite. I further
                            acknowledge having read and understood the Disclaimer below.
                        </p>
                        <h4 className="rgb-64-64-64">Disclaimer</h4>
                        <p className="bodytext"><strong>About: </strong>This knowledge-site (<a
                            href="hhtps://www.nishithdesai.com" target="_blank"
                            onClick="_gaq.push(['_trackEvent', 'Leaving Site', 'External URL', 'hhtps://www.nishithdesai.com']);">www.nishithdesai.com</a>)
                            is owned and operated by Nishith Desai Associates (“NDA”), and is a resource for your
                            informational and educational purposes only.
                        </p>
                        <p className="bodytext"><strong>No Warranty:</strong> NDA does not warrant that any content or
                            information contained on this knowledge-site is accurate, correct, complete or up-to-date,
                            and hereby disclaims any and all liability to any person for any actual or threatened loss
                            or damage caused by errors or omissions, whether such errors or omissions result from
                            negligence, accident or otherwise. NDA assumes no liability for the interpretation and/or
                            use of the content and/or information contained on this knowledge-site, nor does it offer
                            any warranty of any kind, either expressed or implied in relation to such content or
                            information.
                        </p>
                        <p className="bodytext"><strong>Third-Party Links:</strong> NDA does not intend that links /
                            URLs contained on this knowledge-site re-directing users to third party websites be
                            considered as referrals to, endorsements of, or affiliations with any such third party
                            website operators. NDA is not responsible for, and makes no representations or warranties,
                            express or implied, about the content or information contained on such third party websites
                            to which links may be provided on this knowledge-site.
                        </p>
                        <p className="bodytext"><strong>No Legal Advice:</strong> By clicking ‘I agree’ and proceeding
                            further, you acknowledge, represent and undertake that you on your own accord wish to know
                            more about NDA, its capabilities and research content and information contained on the
                            knowledge-site, for your own knowledge and personal use. The content and information
                            contained on this knowledge-site should not be construed as nor relied upon as legal advice.
                            You as a reader or recipient of content or information contained in this knowledge-site
                            should not act, nor refrain from acting, based upon any or all of such content or
                            information, but should always seek the advice of competent legal counsel licensed to
                            practice the relevant law in the appropriate jurisdiction.
                        </p>
                        <p className="bodytext"><strong>No Attorney-Client Relationship:</strong> This knowledge-site is
                            not intended to be and you should not consider the content or information contained therein
                            to be an advertisement, solicitation, inducement or invitation for an Attorney-Client
                            relationship. Transmission, receipt or use of this knowledge-site, including content and
                            information contained therein, does not constitute nor create an Attorney-Client
                            relationship between NDA and you. </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Agree
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default Footer