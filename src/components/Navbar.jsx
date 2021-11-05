import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary mb-3">
                <NavLink className="navbar-brand" to="/">
                    WikiCountries
                </NavLink>
            </nav>
        )
    }
}
