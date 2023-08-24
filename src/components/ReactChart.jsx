import React, { Component } from 'react'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { label: 'January', 2022: 21, 2023: 41 },
    { label: 'February', 2022: 35, 2023: 79 },
    { label: 'March', 2022: 175, 2023: 57 },
    { label: 'April', 2022: 51, 2023: 47 },
    { label: 'May', 2022: 41, 2023: 63 },
    { label: 'June', 2022: 47, 2023: 71 }
];

class Recharts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ContainerStyle: {
                
                paddingRight: '20px',
            },
            textStyle: {
                color: 'white',
            }
        }
    }
    render() {

    return (
        <div className="row">
            <div className="col-md-12">
                
            </div>
            <div className="section col-md-6" style={this.state.ContainerStyle}>
                <h2 className="section-title" style={{ color: "white" }}>Donations</h2>
                <div className="section-content" >
                    <ResponsiveContainer width={600} height={400} >
                        <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                            <XAxis dataKey="label" stroke="white" />
                            <YAxis stroke="white" />
                            <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="2022" fill="#175f3f" />
                            <Bar dataKey="2023" fill="#8fce00" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    )
    }
}

export default Recharts;
