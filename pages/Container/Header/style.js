import styled from 'styled-components'
import { Menu } from 'antd'
import { Color } from 'common/constants'
import { MediumText } from 'components/Text'
import { Div } from 'components/DivBase'
import ImageBase from 'components/Image'
import ButtonBasic from 'components/ButtonBasic'
const HeaderPage = styled(Div)`
  height: 70px;
  border-bottom: 3px solid #F5F5F5;
`
export const ContainerLogo = styled.div`
  gap:15px;
  cursor:pointer;
  align-items:center;
  display:flex;
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
  width:100px;
`
export const Image = styled(ImageBase)`
  border-radius: 25px;
`
export const NameHost = styled(MediumText)`
  font-style: italic ;
  min-width: 100px;
`
export const Left = styled.div`
display: flex;
flex-direction: row wrap;
`
export const ButtonMore = styled(ButtonBasic)`

`
export const MenuHome = styled(Menu)`
  padding: 0px;
  gap:30px;
  display:flex ;
  /* position: relative ; */
  margin-left:30px !important ;
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
