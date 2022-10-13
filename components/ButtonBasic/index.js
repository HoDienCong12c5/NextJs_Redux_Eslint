import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 8px;
  background:red ;
  &:hover{
    cursor: pointer;
  }
`
const ButtonCustom = styled(Button)`
  &.ant-btn{
    background-color: transparent ;
    background: transparent ;
    padding: 0px;
    border:0px;
    font-weight:${props=>props.fontBold ?'bolder':'unset'};
    font-size: ${props=>`${props.fontSize??14}px`} ;
    color:white
  }
  &:hover{
    cursor: pointer;
  }
`
const Icon = styled.img`
  width: 25px;
  height: 25px;
`
const ButtonBasic = ({
  onClick,
  icon,
  title = '',
  className = '',
  style = {},
  isLoading = false,
  children = null,
  fontSize=14,
  fontBold=null,
}) => {
  return (
    <ContainerBtn onClick={onClick} className={className} style={style}>
      <ButtonCustom fontBold={fontBold} loading={isLoading} fontSize={fontSize}>
        {title || children}
        {icon && <Icon src={icon} />}
      </ButtonCustom>
    </ContainerBtn>
  )
}
export default ButtonBasic
