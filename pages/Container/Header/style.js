import styled from 'styled-components'
import { Menu } from 'antd'
import { Color } from 'common/constants'
import {MediumText} from 'components/Text'
import { Div } from 'components/DivBase'
import ImageBase from 'components/Image'
const HeaderPage = styled(Div)`
  height: 70px;
  border-bottom: 3px solid #F5F5F5;
`
export const ContainerHome = styled(MediumText)`
   width:100%;
   display:flex;
   justify-content: space-between;
   align-items: center;
  max-width: 1550px;
  height: 70px;
  padding: 10px 0px;
`
export const Right = styled(MediumText)`

`
export const Image = styled(ImageBase)`
  border-radius: 25px;
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
