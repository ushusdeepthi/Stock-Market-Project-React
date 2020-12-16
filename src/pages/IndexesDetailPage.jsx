import React , {useState,useEffect} from 'react'
import { BarChart } from '../styles/Styles'

export default function IndexesDetailPage(props) {
    const [indexData, setIndexData] = useState(null)
    useEffect(() => {
        const id = props.match.params.id
        fetch(`https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`)
        .then(response => response.json())
        .then(data => setIndexData(data))
    },[])

    
    return (
        <div>
           
            {indexData &&
            <>
             <h3>{indexData.name}</h3>
             <li>Namn: {indexData.name}</li> 
             <li>Price : {indexData.price}</li>
             <li>Market : {indexData.market}</li>
             <li>mtd : {indexData.mtd}</li>
             <li>Today : {indexData.today}</li>
             <li>source : {indexData.source}</li>
             <li>w1 : {indexData.w1}</li>
             <li>y3 : {indexData.y3}</li>
             <li>y5 : {indexData.y5}</li>
             <li>ytd : {indexData.ytd}</li>
            <div>
            <h4 className="mt-5">Progress</h4> 
            <BarChart width={indexData.w1} color="#da4453">w1: {indexData.w1}</BarChart>
            <BarChart width={indexData.y3} color="#37bc9b">y3: {indexData.y3}</BarChart>
            <BarChart width={indexData.y5} color="#f6bb42">y5: {indexData.y3}</BarChart>
            <BarChart width={indexData.ytd} color="#967adc">ytd: {indexData.ytd}</BarChart>    
            </div> 
             </>}
        </div>
    )
}
