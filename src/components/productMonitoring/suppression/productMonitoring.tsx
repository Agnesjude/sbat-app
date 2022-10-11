import React from "react";
import './productMonitoring.css';
import {Link} from 'react-router-dom'

class ProductMonitoring extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-tab">Products Monitoring Suppression</div>
                <div className="header-button-div">
                    <Link className="header-button" to={{pathname:'/suppress-product'}}>
                        Suppress/Postpone Alerts
                    </Link>
                    <div className="header-button">
                        Download Reports
                    </div>
                </div>
                <div className="header-content">
                    <h5>Product Monitoring Tool:</h5>
                    <ul>
                        <li>
                            As a user you can select Supress or postpone alert which you want to suppress.
                        </li>
                        <li>
                            border-radius property defines the radius
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default ProductMonitoring;