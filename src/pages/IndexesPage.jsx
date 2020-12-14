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
                    <>
            <h2>Indexsidan</h2>

     <h4>name</h4>
        <table>
            <thead><th>name</th> <th>price</th> </thead> 
            {indexList && Object.entries(indexList).map(item =>{
              const key = item[0]
            const value = item[1]
            return <IndexItem value={value} key={key}/>
            })}
            </table>
            </>
    )
}
