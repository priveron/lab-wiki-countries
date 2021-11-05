import React, { Component } from 'react';
import data from '../countries.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function CountryDetails(props) {
  const countryParams = useParams();
  const country = data.find((c) => c.cca3 === countryParams.id);
  console.log(country);
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area} km</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((v) => (
                  <li>
                    <Link to={'/' + v}>{v}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
