import styled, { keyframes } from 'styled-components';

const barBefore=keyframes`
0%{
    width: 0px;
  }
  100%{
    width: ${props=>props.width}%;
  }
`
const BarChart=styled.div`
 height: 30px;
  max-width: 500px;
  margin: 0 auto 10px auto;
  line-height: 30px;
  font-size: 16px;
  color:black;
  padding: 0 0 0 10px;
  position: relative;
  &&::before{
  content: '';
  width: 100%;
  position: absolute;
  left: 0;
  height: 30px;
  top: 0;
  z-index: -2;
  background: #ecf0f1;
}
&&::after{
  content: '';
  background:${props=>props.color};
  height: 30px;
  transition: 0.7s;
  display: block;
  width: ${props=>props.width}%;
  animation: ${barBefore} 1 1.8s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
`
const TableStyled=styled.table `
    border-collapse: separate;
    background:#fff;
    border-radius:5px;
    margin:50px auto;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3); 
  
thead {
   border-radius:5px;
}

thead th {

  font-size:16px;
  font-weight:400;
  color:#fff;
 text-shadow:1px 1px 0px rgba(0,0,0,0.5);
  text-align:left;
  padding:20px;
  background-image:linear-gradient(#646f7f, #4a5564);
  border-top:1px solid #858d99;
  
  &:first-child {
  border-radius:5px; 
  }

  &:last-child {
    border-radius:5px;
  }
}

tbody tr td {
  font-family: 'Open Sans', sans-serif;
  font-weight:400;
  color:#5f6062;
  font-size:13px;
  padding:20px 20px 20px 20px;
  border-bottom:1px solid #e0e0e0;
  
}

tbody tr:nth-child(2n) {
  background:#f0f3f5;
}

tbody tr:last-child td {
  border-bottom:none;
  &:first-child {
   border-radius:5px;
  }
  &:last-child {
    border-radius:5px;
  }
}

tbody:hover > tr td {
  opacity:0.5;
  
  /* uncomment for blur effect */
  /* color:transparent;
  @include text-shadow(0px 0px 2px rgba(0,0,0,0.8));*/
}

tbody:hover > tr:hover td {
 text-shadow:none;
  color:#2d2d2d;
 opacity:1.0;
}
`
export {BarChart,TableStyled}