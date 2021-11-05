import React, { Component } from 'react'
import { Link } from "react-router-dom";
import data from "../countries.json"

export default class CountryList extends Component {
    state = {
        countries: [...data]
    };

    render() {
        return (
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                {this.state.countries.map((country) => (
                    <Link className="list-group-item list-group-item-action" key={country.cca3} to={"/" + country.cca3}>
                        {country.flag} {country.name.common}
                    </Link>
                ))}
            </div>
        )
    }
}
