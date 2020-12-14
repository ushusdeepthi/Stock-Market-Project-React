import React from 'react'
import {Link} from 'react-router-dom'

export default function MarketItem({value}) {
    return (
        <>
            <Link to={`/markets/${value}`}>
       <p>Name: {value} </p>
    </Link>
        </>
    )
}
