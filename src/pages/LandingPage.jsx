import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage() {
    return (
        <div>
            <h1>LandingPage</h1>
            <Link to="/crypto">Länk till Crypto</Link>
            <Link to="/currencies">Länk till Currencies</Link>
            <Link to="/indexes">Länk till Indexes</Link>
            <Link to="/markets">Länk till Markets</Link>
        </div>
    )
}
