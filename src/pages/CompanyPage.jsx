import React, {useEffect, useState} from 'react'

export default function CompanyPage(props) {

    const [companyItem, setCompanyItem] = useState(null)

useEffect(()=>{
const id = props.match.params.id
console.log(id)
const company = props.match.params.company
console.log(company)

    fetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${id}/${company}.json`)
    .then(response => response.json())
    .then(data => setCompanyItem(data))

},[])

console.log(companyItem)
    return (
        <div>
        {companyItem && (<>  <li>Namn: {companyItem.name}</li> 
             <li>Price :{companyItem.price}</li>
             <li>Market :{companyItem.market}</li>
             <li>mtd :{companyItem.mtd}</li>
             <li>Today :{companyItem.today}</li>
             <li>source :{companyItem.source}</li>
             <li>w1 :{companyItem.w1}</li>
             <li>y3 :{companyItem.y3}</li>
             <li>y5 :{companyItem.y5}</li>
             <li>ytd :{companyItem.ytd}</li></>)} 
        </div>
    )
}
