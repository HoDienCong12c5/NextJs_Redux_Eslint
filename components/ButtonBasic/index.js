import React from 'react'
import {Button } from 'antd'
import styled from 'styled-components'
const ContainerBtn = styled.div`
display: flex;
alignItems: :center;
justifyContent: 'center';
padding: 10px;
borderRadius: 8px;
`
const ButtonCustom = styled(Button)`
  
`
const Icon = styled.img`
  width: 25px;
  height: 25px;
`
const ButtonBasic = ({ onClick, icon, title='ButtonBasic', className='', style={}, isLoading=false, children=null }) => {
  return (
    <ContainerBtn onClick={onClick} className={className} style={style}>
      <ButtonCustom loading={isLoading}>
        {title || children}
        {
          icon && <Icon src={icon}/>
        }
      </ButtonCustom>
    </ContainerBtn>
  )
}
export default ButtonBasic
