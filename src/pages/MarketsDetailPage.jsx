import React, { useState, useEffect } from 'react'
import MarketItem from '../components/MarketItem'
import MarketDetailItem from '../components/MarketDetailItem'


export default function MarketsDetailPage(props) {
    const [marketsData, setMarketsData] = useState(null)
    useEffect(() => {
        const id = props.match.params.id
        fetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`)
            .then(response => response.json())
            .then(data => setMarketsData(data))
    }, [])


    return (
        <div>
            <h4>{props.match.params.id}</h4>
         
                <>
                    {marketsData && Object.entries(marketsData).map(item => {
                        const key = item[0]
                        const value = item[1]
                        console.log(item[1])
                        console.log(value.name)
                        return <MarketDetailItem value={value} key={key} />

                    })}
                </>
        </div>
    )
}