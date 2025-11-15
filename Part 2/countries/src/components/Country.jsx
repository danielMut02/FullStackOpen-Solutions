const Country = ({name, capital, area, languages, flag}) =>
    
    <div>
        <h1>{name}</h1>
        <p>Capital {capital}</p>
        <p>Area {area}</p>
        <h1>Languages</h1>
        <ul>
            {Object.values(languages).map((language) => (
                <li key={language}> {language} </li>
            ))}
        </ul>
        <img src={flag} alt={ `${name} picture` } />
    </div>

export default Country