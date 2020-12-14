import React, {useState,useEffect} from 'react'
import IndexItem from '../components/IndexItem'

export default function IndexesPage() {

    const [indexList, setIndexList]=useState(null)
    useEffect(()=>{
fetch("https://market-data-collector.firebaseio.com/market-collector/indexes/se.json")
.then(response => response.json())
.then(data => setIndexList(data))
    },[])
    return(
        <div>
             
            <h2>Cryptosidan</h2>
            <p>Här listar vi alla cryptos och skriver ut cryptoItems</p>
            {indexList && Object.entries(indexList).map(item =>{
              const key = item[0]
            const value = item[1]
            return <IndexItem value={value} key={key}/>
            })}
            </div>
    )
}
