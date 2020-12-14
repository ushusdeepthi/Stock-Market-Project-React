import React from 'react'
import {Link} from 'react-router-dom'

export default function IndexItem({value}) {
    return (
        <Link to={`/indexes/${value.ticker}`}>
       <p>Name:{value.name} Price:{value.price}</p>
    </Link>
    )
}
