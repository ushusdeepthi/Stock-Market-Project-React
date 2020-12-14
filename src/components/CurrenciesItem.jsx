import React from 'react'
import { Link } from 'react-router-dom'

export default function CurrenciesItem({value}) {
    
    return (
        <Link to={`/currencies/${value.ticker}`}>
            <p>Name:{value.name} Price:{value.price}</p>
        </Link>

    )
}




