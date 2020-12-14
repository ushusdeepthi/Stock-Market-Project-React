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
            <li>Namn: {currencyData.name}</li> 
             <li>Price :{currencyData.price}</li>
             <li>Market :{currencyData.market}</li>
             <li>mtd :{currencyData.mtd}</li>
             <li>Today :{currencyData.today}</li>
             <li>source :{currencyData.source}</li>
             <li>w1 :{currencyData.w1}</li>
             <li>y3 :{currencyData.y3}</li>
             <li>y5 :{currencyData.y5}</li>
             <li>ytd :{currencyData.ytd}</li>

            </> }
        </div>
    )
}
