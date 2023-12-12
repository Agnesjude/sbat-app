import React from "react";
import { Link } from "react-router-dom"
import './home.css';

export const Home = () => {
    return (
        <div>
            <div className="sbat-home-page">
                <Link className="sbat-home-tile" to={{ pathname: '/' }}>
                    Asset Journal Supervision Tool 
                </Link>
                <Link className="sbat-home-tile" to={{ pathname: '/product-monitoring' }}>
                    Product Monitoring Tool
                </Link>
            </div>
        </div>
    )
}
