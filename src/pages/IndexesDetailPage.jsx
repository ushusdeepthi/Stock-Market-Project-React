import React , {useState,useEffect} from 'react'

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
            <p>Detaljsida</p>
            {indexData &&
            <>
             <li>Namn: {indexData.name}</li> 
             <li>Price :{indexData.price}</li>
             <li>Market :{indexData.market}</li>
             <li>mtd :{indexData.mtd}</li>
             <li>Today :{indexData.today}</li>
             <li>source :{indexData.source}</li>
             <li>w1 :{indexData.w1}</li>
             <li>y3 :{indexData.y3}</li>
             <li>y5 :{indexData.y5}</li>
             <li>ytd :{indexData.ytd}</li>
             </>}
        </div>
    )
}
