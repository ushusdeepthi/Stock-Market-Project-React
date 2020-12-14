import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled.div `
padding:20px;
background-color: #dadada;
border-radius: 10px;
max-width: 300px;
display:block;
margin:0 auto;
margin-bottom:20px;
text-align: center;
&:hover {
    background-color: pink;
}
`


export default function LandingPage() {
    return (

        <div>
           <div className="text-center "> <h1>Stock Market</h1></div>
            <div className="p-3"> 
          <StyledLink><Link to="/crypto">Crypto</Link></StyledLink>
          <StyledLink><Link to="/currencies">Currencies</Link></StyledLink>
          <StyledLink><Link to="/indexes">Indexes</Link></StyledLink> 
         <StyledLink><Link to="/markets">Markets</Link></StyledLink>
            </div>
        </div>
    )
}
