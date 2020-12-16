import React, {useState,useEffect} from 'react'

export default function CryptoDetailPage(props) {

    const [cryptoData, setCryptoData] = useState(null)
console.log(props)
    useEffect(() => {
        const id = props.match.params.id
        fetch(`https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`)
        .then(response => response.json())
        .then(data => setCryptoData(data))
    },[])


    return (

        <div>   
            {cryptoData &&
            <>
             <h3>{cryptoData.name}</h3>
            <li>Namn: {cryptoData.name}</li> 
             <li>Price :{cryptoData.price}</li>
             <li>Market :{cryptoData.market}</li>
             <li>Today :{cryptoData.today}</li>
             <li>source :{cryptoData.source}</li>
         
             </>}
        </div>
    )
}
