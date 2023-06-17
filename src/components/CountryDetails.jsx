import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({countries}) => {
    const [country, setCountry] = useState(null);
    const { countryCode } = useParams();
  
    useEffect(() => {
      const selectedCountry = countries.find(c => c.alpha3Code === countryCode);
  
      if (selectedCountry) {
        setCountry(selectedCountry);
      }
    }, [countryCode, countries]);

    const getCountryName = (code) => {
        const borderCountry = countries.find(c => c.alpha3Code === code);
        return borderCountry ? borderCountry.name.common : '';
      };
  
    return (
      <div className="col-8">    
        {country && (
          <div>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
              style={{ width: '200px' }}
            />
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
                  <td>
                    {country.area} km<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                    {country.borders.map(border => (
                      <li key={border}>
                        <Link to={`/${border}`}>{getCountryName(border)}</Link>
                      </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        </div>
    );
  };
  
  export default CountryDetails;
