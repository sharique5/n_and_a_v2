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
                        <h1>Disclaimer</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>I HAVE READ THE DISCLAIMER AND AGREE TO IT</h3>
                    <h4>USER ACKNOWLEDGEMENT</h4>
                    <p>
                        By proceeding further and clicking on the "I AGREE" button herein below, I acknowledge that I of my own accord wish to know more about Nair & Associates for
                        my own information and use. I further acknowledge that there has been no solicitation, invitation or inducement of any sort whatsoever from Nair & Associates
                        or any of its members to create an Attorney-Client relationship through this knowledge site. I further acknowledge having read and understood the Disclaimer below.
                    </p>
                    <h4>DISCLAIMER</h4>
                    <p>
                        <strong>About:</strong> This knowledge-site (www.nairandassociates.in) is owned and operated by Nair & Associates (N&A), and is a resource for your informational
                        and educational purposes only.
                    </p>
                    <p>
                        <strong>No Warranty:</strong> N&A does not warrant that any content or information contained on this knowledge-site is accurate, correct, complete or up-to-date,
                        and hereby disclaims any and all liability to any person for any actual or threatened loss or damage caused by errors or omissions, whether such errors or
                        omissions result from negligence, accident or otherwise. N&A assumes no liability for the interpretation and/or use of the content and/or information contained
                        on this knowledge-site, nor does it offer any warranty of any kind, either expressed or implied in relation to such content or information.
                    </p>
                    <p>
                        <strong>Third-Party Links:</strong> N&A does not intend that links / URLs contained on this knowledge-site re-directing users to third party websites be considered
                        as referrals to, endorsements of, or affiliations with any such third party website operators. N&A is not responsible for, and makes no representations or warranties,
                        express or implied, about the content or information contained on such third party websites to which links may be provided on this knowledge-site.
                    </p>
                    <p>
                        <strong>No Legal Advice:</strong> By clicking ‘I AGREE’ and proceeding further, you acknowledge, represent and undertake that you on your own accord wish to know
                        more about N&A, its capabilities and research content and information contained on the knowledge-site, for your own knowledge and personal use. The content
                        and information contained on this knowledge-site should not be construed as nor relied upon as legal advice. You as a reader or recipient of content or information
                        contained in this knowledge-site should not act, nor refrain from acting, based upon any or all of such content or information, but should always seek the advice
                        of competent legal counsel licensed to practice the relevant law in the appropriate jurisdiction.
                    </p>
                    <p>
                        <strong>No Attorney-Client Relationship: </strong> This knowledge-site is not intended to be and you should not consider the content or information contained
                        therein to be an advertisement, solicitation, inducement or invitation for an Attorney-Client relationship. Transmission, receipt or use of this knowledge-site,
                        including content and information contained therein, does not constitute nor create an Attorney-Client relationship between N&A and you
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