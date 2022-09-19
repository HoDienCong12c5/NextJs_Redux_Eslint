import React from 'react'
import ContainerOther, {
  ImageCustom,
  Title,
  Details,
  ItemOther
} from './style'
import Media from 'react-media'
import {Div} from 'components/DivBase'
import {Button, Title as Name, RoutePage} from 'common/constants'
import { useRouter } from 'next/router'
const Item=({src, title, des})=>{
 
  return (
    <ItemOther >
      <ImageCustom
        src={src}
      />
      <Title > {title}</Title>
      <Details >{des}</Details>
    </ItemOther>
  )
}
const onClick=(index)=>{
  const router = useRouter()
  router.push(`${RoutePage.productDetails.path}`,`${RoutePage.productDetails.as}/?id=${index}`, { shallow: true })
}

const OtherItem = () => {
  const renderDesktop = ()=>{
    return(
      <ContainerOther>
        <Item
          onClick={()=>onClick(0)}
          src={''}
          title={Name.product.product1}
          desc={Button.detail}
        />
        <Item
          onClick={()=>onClick(1)}
          src={''}
          title={Name.product.product2}
          desc={Button.detail}
        />
        <Item
          onClick={()=>onClick(2)}

          src={''}
          title={Name.product.product3}
          desc={Button.detail}
        />
      </ContainerOther>
    )
  }
  const renderMobile = () => {
    return (
      <ContainerOther>

      </ContainerOther>
    )
  }
  return (
    <Div>
      <Media query='(min-width:768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}
      </Media>
    </Div>

  )
}

export default OtherItem