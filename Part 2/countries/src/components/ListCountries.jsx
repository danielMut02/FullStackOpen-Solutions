import Country from "./Country";
import Weather from "./Weather";

const ListCountries = ({land, clickHandler, showLand}) => {
    return (
        <>
            {land.length > 10 && (<div>Too many matches, specify another filter</div>)}

            {land.length > 1 && land.length <=10 &&
                land.map(({ name, capital, area, languages, flags }) => {
                    const landName = name.common
                    const selectedCountry = showLand === landName

                    return (
                        <div key={landName}>
                            {landName}{' '}
                            {!selectedCountry ? (<button onClick = {() => clickHandler(landName)}>show</button>) : "" }
                            {selectedCountry && (
                                <>
                                    <Country
                                        name={landName}
                                        capital={capital}
                                        area={ area }
                                        languages={ languages }
                                        flag={ flags.png }
                                    />
                                    <Weather capital = {capital} />
                                </>
                            )

                            }
                        </div>
                    )
                })}
            
            {land.length === 1 && (
                <>               
                    <Country 
                        name={land[0].name.common}
                        capital={land[0].capital}
                        area={ land[0].area }
                        languages={ land[0].languages }
                        flag={ land[0].flags.png }
                    />
                    <Weather capital = {land[0].capital[0]} />
                </>

            )}
        </>
    )
}

export default ListCountries