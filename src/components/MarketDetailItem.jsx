import React from 'react'
import {Link} from 'react-router-dom'
export default function MarketDetailItem({value}) {


    return (
        <tr>
             <td><Link to={`${value.market}/${value.ticker}`} >{value.name}</Link></td>  <td> {value.price}</td>
        </tr>
    )
}
