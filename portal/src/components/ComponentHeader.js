import React from 'react'
import '../stylesheets/componentHeader.scss'

class ComponentHeader extends React.Component {
    render() {
        return (
            <header className="text-center hello-class">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div>
                                <h1>{this.props.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default ComponentHeader