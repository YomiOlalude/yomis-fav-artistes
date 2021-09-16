import React, { Component } from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        
    }
   
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar" >
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="fav artistes" className="fav-logo" />
                        </Link>
                        <button type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" onClick={this.handleToggle} />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/artistes">Artistes</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
