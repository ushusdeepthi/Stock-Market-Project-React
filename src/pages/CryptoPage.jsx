import React, {useState,useEffect} from 'react'
import CryptoItem from '../components/CryptoItem'

export default function CryptoPage() {
    //Här Fetchar vi och använder useState och useEffect
    const [cryptoList, setCryptoList] = useState(null)

    useEffect(()=>{
fetch("https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json")
.then(response => response.json())
.then(data => setCryptoList(data))
    },[])
    console.log(cryptoList)

    return (
        <div>
            <h2>Cryptosidan</h2>
            <p>Här listar vi alla cryptos och skriver ut cryptoItems</p>
            {cryptoList && Object.entries(cryptoList).map(item =>{
              const key = item[0]
            const value = item[1]

            return <CryptoItem  value={value} key={key}/>
            })}
        </div>
    )
}
