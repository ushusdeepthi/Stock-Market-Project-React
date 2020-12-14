import React, { useState, useEffect } from 'react'

export default function CurrenciesDetailPage(props) {

    const [currencyData, setCurrencyData] = useState(null)

    useEffect(() => {
        const id = props.match.params.id
        fetch(`https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`)
            .then(response => response.json())
            .then(data => setCurrencyData(data))
    }, [])


    return (
        <div>
            <p>Detaljsida Currency </p>
            {currencyData && 
            <>
                <li>{currencyData.name}</li>
                <li>{currencyData.price}</li>
            </> }
        </div>
    )
}
