import styled from 'styled-components'
import { Menu } from 'antd'
import { Color } from 'common/constants'
import {MediumText} from 'components/Text'
import { Div } from 'components/DivBase'

const HeaderPage = styled(Div)`
  height: 50px;
  background-color:${Color.grey} ;
`
export const ContainerHome = styled(MediumText)`
   width:100%;
   display:flex;
   justify-content: space-between;
   align-items: center;
  max-width: 1550px;
  height: 50px;
`
export const Right = styled(MediumText)`

`
export const NameHost = styled(MediumText)`
  font-style: italic ;
`
export const Left = styled.div`

`
export const MenuHome = styled(Menu)`
  padding: 0px;
  gap:30px;
  display:flex ;
  position: relative ;
  right: 90px;
  .ant-menu-item-selected {
    &::after {
      border: none !important;
    }
  }
  .ant-menu-item {
    list-style: none;
    &::after {
      border: none !important;
    }
    &:hover::after {
      border: none !important;
    }
    &:hover {
      color: red !important;
      cursor: pointer;
      text-decoration: underline ;
    }
  }
`

export default HeaderPage
