import React, {useState, useEffect} from 'react'
import MarketItem from '../components/MarketItem'


export default function MarketsPage() {
//Fetch 



const [marketList, setMarketList] = useState(null)

useEffect(() => {
    fetch("https://market-data-collector.firebaseio.com/market-collector/markets.json")
    .then(response => response.json())
    .then(data => setMarketList(data))
}, [])
/* console.log(currencyList) */


return (
<div>
    <h2>Market page</h2>
    {marketList && Object.entries(marketList).map(item => {
        const key = item[0]
        const value = item[1]
        console.log(item[1])
        console.log(value.name)
        return <MarketItem value={key} key = {key} />
        
    })}
        </div>
)
    
}