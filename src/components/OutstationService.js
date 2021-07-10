import React from 'react'
import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import GeoData from '../db/IndiaMap.json'
import ReactTooltip from "react-tooltip";

const markers = [
    {
        "markerOffset": 20,
        "name": "Indore",
        "coordinates": [
            75.8577,
            22.7196
        ]
    },
    {
        "markerOffset": 20,
        "name": "Bhopal",
        "coordinates": [
            77.4126,
            23.2599
        ]
    },
    {
        "markerOffset": 20,
        "name": "Jabalpur",
        "coordinates": [
            79.9864,
            23.1815
        ]
    },
    {
        "markerOffset": 20,
        "name": "Gwalior",
        "coordinates": [
            78.1828,
            26.2183
        ]
    },
    {
        "markerOffset": 20,
        "name": "Ujjain",
        "coordinates": [
            75.7885,
            23.1765
        ]
    },
    {
        "markerOffset": 20,
        "name": "Dhar",
        "coordinates": [
            75.3025,
            22.6013
        ]
    },
    {
        "markerOffset": 20,
        "name": "Agar",
        "coordinates": [
            23.7137,
            null
        ]
    },
    {
        "markerOffset": 20,
        "name": "Sahajapur",
        "coordinates": [
            76.273,
            23.4273
        ]
    },
    {
        "markerOffset": 20,
        "name": "Damoh",
        "coordinates": [
            79.4387,
            23.8323
        ]
    },
    {
        "markerOffset": 20,
        "name": "Sagar",
        "coordinates": [
            78.7378,
            23.8388
        ]
    },
    {
        "markerOffset": 20,
        "name": "Dewas",
        "coordinates": [
            76.0534,
            22.9676
        ]
    },
    {
        "markerOffset": 20,
        "name": "Khargone",
        "coordinates": [
            75.615,
            21.8335
        ]
    },
    {
        "markerOffset": 20,
        "name": "Khandwa",
        "coordinates": [
            76.3498,
            21.8314
        ]
    },
    {
        "markerOffset": 20,
        "name": "Burhanpur",
        "coordinates": [
            76.218,
            21.3145
        ]
    },
    {
        "markerOffset": 20,
        "name": "Chhatarpur",
        "coordinates": [
            79.591,
            24.9168
        ]
    },
    {
        "markerOffset": 20,
        "name": "Mandsaur",
        "coordinates": [
            75.0679,
            24.0734
        ]
    },
    {
        "markerOffset": 20,
        "name": "Neemuch",
        "coordinates": [
            74.8726,
            24.4738
        ]
    },
    {
        "markerOffset": 20,
        "name": "Ratlam",
        "coordinates": [
            75.0367,
            23.3315
        ]
    },
    {
        "markerOffset": 20,
        "name": "Jaipur",
        "coordinates": [
            75.7873,
            26.9124
        ]
    },
    {
        "markerOffset": 20,
        "name": "Baran",
        "coordinates": [
            76.5132,
            25.1011
        ]
    },
    {
        "markerOffset": 20,
        "name": "Kota",
        "coordinates": [
            75.8648,
            25.2138
        ]
    },
    {
        "markerOffset": 20,
        "name": "Jodhpur",
        "coordinates": [
            73.0243,
            26.2389
        ]
    },
    {
        "markerOffset": 20,
        "name": "Ahmedabad",
        "coordinates": [
            72.5714,
            23.0225
        ]
    },
    {
        "markerOffset": 20,
        "name": "Surat",
        "coordinates": [
            72.8311,
            21.1702
        ]
    },
    {
        "markerOffset": 20,
        "name": "Vadodara",
        "coordinates": [
            73.1812,
            22.3072
        ]
    },
    {
        "markerOffset": 20,
        "name": "Gurgaon",
        "coordinates": [
            77.0266,
            28.4595
        ]
    },
    {
        "markerOffset": 20,
        "name": "Chandigarh",
        "coordinates": [
            76.7794,
            30.7333
        ]
    },
    {
        "markerOffset": 20,
        "name": "Karnal",
        "coordinates": [
            76.9905,
            29.6857
        ]
    },
    {
        "markerOffset": 20,
        "name": "Delhi",
        "coordinates": [
            77.1025,
            28.7041
        ]
    },
    {
        "markerOffset": 20,
        "name": "Noida",
        "coordinates": [
            77.391,
            28.5355
        ]
    },
    {
        "markerOffset": 20,
        "name": "Ghaziabad",
        "coordinates": [
            77.4538,
            28.6692
        ]
    },
    {
        "markerOffset": 20,
        "name": "Allahabad",
        "coordinates": [
            81.8463,
            25.4358
        ]
    },
    {
        "markerOffset": 20,
        "name": "Jaunpur",
        "coordinates": [
            82.6837,
            25.7464
        ]
    },
    {
        "markerOffset": 20,
        "name": "Varanasi",
        "coordinates": [
            82.9739,
            25.3176
        ]
    },
    {
        "markerOffset": 20,
        "name": "Lucknow",
        "coordinates": [
            80.9462,
            26.8467
        ]
    },
    {
        "markerOffset": 20,
        "name": "Kolkata",
        "coordinates": [
            88.3639,
            22.5726
        ]
    },
    {
        "markerOffset": 20,
        "name": "Raipur",
        "coordinates": [
            81.6296,
            21.2514
        ]
    },
    {
        "markerOffset": 20,
        "name": "Bilaspur",
        "coordinates": [
            82.1409,
            22.0797
        ]
    },
    {
        "markerOffset": 20,
        "name": "Hyderabad",
        "coordinates": [
            78.4867,
            17.385
        ]
    },
    {
        "markerOffset": 20,
        "name": "Warangal",
        "coordinates": [
            79.5941,
            17.9689
        ]
    },
    {
        "markerOffset": 20,
        "name": "Nagpur",
        "coordinates": [
            79.0882,
            21.1458
        ]
    },
    {
        "markerOffset": 20,
        "name": "Mumbai",
        "coordinates": [
            72.8777,
            19.076
        ]
    },
    {
        "markerOffset": 20,
        "name": "Pune",
        "coordinates": [
            73.8567,
            18.5204
        ]
    },
    {
        "markerOffset": 20,
        "name": "Shimla",
        "coordinates": [
            77.1734,
            31.1048
        ]
    }
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
                                <circle r={5} fill="#3D5B94" stroke="#3D5B94" strokeWidth={2} onMouseEnter={() => {
                                    this.setTooltipContent(name);
                                }}
                                        onMouseLeave={() => {
                                            this.setTooltipContent("");
                                        }}

                                        data-tip data-for="registerTip"
                                />
                                {/*<text*/}
                                {/*    textAnchor="middle"*/}
                                {/*    y={markerOffset}*/}
                                {/*    style={{ fontFamily: "system-ui", fill: "#3D5B94", fontWeight: "bold" }}*/}
                                {/*>*/}
                                {/*    {name}*/}
                                {/*</text>*/}
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