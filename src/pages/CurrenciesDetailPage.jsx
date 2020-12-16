import React, { useState, useEffect } from 'react'
import { BarChart } from '../styles/Styles'

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
            
            {currencyData && 
             <>
            <h3>{currencyData.name} </h3>
           
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
            <div>
            <h4 className="mt-5">Progress</h4> 
            <BarChart width={currencyData.w1} color="#da4453">w1: {currencyData.w1}</BarChart>
            <BarChart width={currencyData.y3} color="#37bc9b">y3: {currencyData.y3}</BarChart>
            <BarChart width={currencyData.y5} color="#f6bb42">y5: {currencyData.y3}</BarChart>
            <BarChart width={currencyData.ytd} color="#967adc">ytd: {currencyData.ytd}</BarChart>    
            </div> 
            </> }
        </div>
    )
}
