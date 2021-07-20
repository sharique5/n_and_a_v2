import React from 'react'
import {clients} from "../db/const";
import '../stylesheets/clientele.scss';

class Clientele extends React.Component {
    render() {
        return (
            <section className="clientele">
                <ul>
                    {
                        clients.map(client => <li>{client}</li>)
                    }
                </ul>
            </section>
        )
    }
}

export default Clientele