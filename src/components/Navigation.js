import React from 'react';
import '../stylesheets/navigation.scss';
import {static_links} from "../db/const";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                static_links.map(t => {return {name: t.name, path: t.key}}).slice(0, 6),
                static_links.map(t => {return {name: t.name, path: t.key}}).slice(6)
            ]
        }
    }

    render() {
        return (
            <div className="nav-row">
                {
                    this.state.services.map(services => {
                        return (
                            <ul>
                                {
                                    services.map(service => (
                                        <li className="">
                                            <a href={service.path}>{service.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    })
                }
            </div>

        )

        // return (
        //     <div className="row nav-row">
        //         {
        //             this.state.services.map(service => (
        //                 <div className="col-sm-2">
        //                     <a href={service}>{ service }</a>
        //                 </div>
        //             ))
        //         }
        //     </div>
        //
        // )
    }
}

export default Navigation;