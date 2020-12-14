import React from 'react'
import {Link} from 'react-router-dom'

export default function MarketDetailItem({value}) {
    return (
        <div>
            
            <Link to={`/${value.market}/${value.ticker}`} >{value.name} : Price {value.price}</Link>
        </div>
    )
}
