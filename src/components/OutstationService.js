import React from 'react'
import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import GeoData from '../db/IndiaMap.json'
import ReactTooltip from "react-tooltip";

const markers = [
    { markerOffset: 20, name: "Indore", coordinates: [75.8577, 22.7196] },
    { markerOffset: -20, name: "Bhopal", coordinates: [77.4126, 23.2599] },
    { markerOffset: 20, name: "Delhi", coordinates: [77.1025, 28.7041] },
    { markerOffset: 20, name: "Mumbai", coordinates: [72.8777, 19.0760] },
    { markerOffset: 20, name: "Hyderabad", coordinates: [78.3850, 17.3850] },
    { markerOffset: 20, name: "Chennai", coordinates: [80.2707, 13.0827] },
    { markerOffset: 20, name: "Kolkata", coordinates: [88.3639, 22.5726] }
];

class OutstationService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.setTooltipContent = this.setTooltipContent.bind(this)
    }

    setTooltipContent(text) {
        this.setState({ content: text })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                    <h3>Our service network includes</h3>
                    <ComposableMap
                        projection="geoAzimuthalEqualArea"
                        projectionConfig={{
                            center: [78.9629, 22.5937],
                            scale: 1000
                        }}
                        projection="geoMercator"
                    >
                        <Geographies geography={GeoData}>
                            {({ geographies }) =>
                                geographies
                                    .map(geo => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#EAEAEC"
                                            stroke="#000000"
                                        />
                                    ))
                            }
                        </Geographies>
                        {markers.map(({ name, coordinates, markerOffset }) => (
                            <Marker key={name} coordinates={coordinates}>
                                <circle r={10} fill="#3D5B94" stroke="#3D5B94" strokeWidth={2} onMouseEnter={() => {
                                    this.setTooltipContent(name);
                                }}
                                        onMouseLeave={() => {
                                            this.setTooltipContent("");
                                        }}

                                        data-tip data-for="registerTip"
                                />
                                <text
                                    textAnchor="middle"
                                    y={markerOffset}
                                    style={{ fontFamily: "system-ui", fill: "#3D5B94", fontWeight: "bold" }}
                                >
                                    {name}
                                </text>
                            </Marker>
                        ))}
                    </ComposableMap>
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                        {this.state.content}
                    </ReactTooltip>
                </div>
            </div>
        )
    }
}

export default OutstationService;