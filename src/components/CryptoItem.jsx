import React from 'react'
import {Link} from 'react-router-dom'
export default function CryptoItem({value}) {

    return (
    <Link to={`/crypto/${value.ticker}`}>
       <p>Name:{value.name} Price:{value.price}</p>
    </Link>
    )
}
