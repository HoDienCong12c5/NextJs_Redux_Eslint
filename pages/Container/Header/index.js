import React ,{useEffect, useState, useRef} from 'react'
import HeaderPage, {Image,NameHost,ContainerHome, Right, Left, MenuHome} from './style'
import Media from 'react-media'
import MyModal from 'components/MyModal'
import {NamePage} from 'common/constants'
import Img from 'common/images'
import {MediumText} from 'components/Text'


const itemMenu=[
  { label: NamePage.home, key: NamePage.home }, // remember to pass the key prop
  { label: NamePage.about, key: NamePage.about },
  { label: NamePage.contact, key: NamePage.contact },
  { label: NamePage.myCart, key: NamePage.myCart }
]
const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const myModal = useRef(null)
  const onClick=(key)=>{
    console.log({key})
  }
  const renderDesktop = ()=>{
    return (
      <ContainerHome>
        <div style={{display:'flex', alignItems:'center', gap:15}}>
          <Image src={Img.home.logo}/>
          <NameHost fontWeight>
            Coffee của bạn
          </NameHost>

        </div>
        <Left >

          <MenuHome
            mode='horizontal'
            onClick={onClick}
            defaultSelectedKeys={['home']}

          >
            {
              itemMenu.map((item, index)=>(
                <MenuHome.Item key={index} icon={<></>}>
                  <div>
                    {item.label}

                  </div>
                </MenuHome.Item >
              ))
            }
          </MenuHome>
        </Left>
        <Right >

        </Right>
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
          return renderDesktop()
        }}
      </Media>
      <MyModal ref={myModal} />
    </HeaderPage>
  )
}
// Header.getInitialProps = async ({ query }) => {
//   const { id} = query
//   return {id}
// }
export default Header
