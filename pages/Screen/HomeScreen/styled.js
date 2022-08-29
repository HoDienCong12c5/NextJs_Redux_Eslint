import styled from 'styled-components'
import React from 'react'
export const Container = styled.div`
    width: 100%;
    align-items: center;  
`
export const Input = styled.input`  
    width: 100%;
    border:0px;
    &:hover{
        border:0px;
    }
    &:focus{
        border:0px;

    }
    &:focus-visible{
        border:0px solid red;
        background-color: #f5f5f5;
        padding: 10px;
        outline: none;
        border-radius: 0px;
    }
`
export const Buttons = styled.button`
    background-color: ${props => props.isSubmit ? 'green' : 'red'};
`
export const ChartContainer = styled.div`
    &:hover{
        
        transform: translate(0, -5px);
        transform: scale(1.1,1.1);
        cursor: pointer;
    }
`
const X = () => {
  return (
    <div>
      <h1>X</h1>
    </div>
  )
}
export default X
