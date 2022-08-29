import React ,{useEffect, useState, useRef} from 'react'
import HeaderPage, {ContainerHome, Right, Left} from './style'
import Media from 'react-media'
const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const myModal = useRef(null)
  const renderDesktop = ()=>{
    return (
      <ContainerHome>
        <Right >
                    right
        </Right>
        <Left >
                    left
        </Left>
      </ContainerHome>
    )
  }
  const renderMobile=()=>{

  }
  return (
    <HeaderPage>
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}
      </Media>
      <MyModal ref={myModal} />
    </HeaderPage>
  )
}
Header.getInitialProps = async ({ query }) => {

}
export default Header
