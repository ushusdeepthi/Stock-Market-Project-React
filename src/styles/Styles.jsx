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
export {BarChart}