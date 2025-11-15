import Country from "./Country";

const ListCountries = ({land}) => {
    return (
        <>
            {land.length > 10 && (<div>Too many matches, specify another filter</div>)}

            {land > 1 && land.length <=10 &&
                land.map(({ name }) => {
                    const landName = name.common

                    return (
                        <div key={landName}>
                            {landName}{' '} 
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
                </>

            )}
        </>
    )
}

export default ListCountries