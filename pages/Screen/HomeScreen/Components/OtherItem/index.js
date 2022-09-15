import React from 'react'
import {
  ContainerOther,
  ImageCustom,
  Title,
  Details,
  ItemOther
} from './style'
import Media from 'react-media'
import {Div} from 'components/DivBase'
import {Button} from 'common/constants'
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
const OtherItem = () => {
  const renderDesktop = ()=>{
    return(
      <ContainerOther>
        <Item
          src={''}
          title={''}
          desc={Button.detail}
        />
        <Item
          src={''}
          title={''}
          desc={Button.detail}
        />
        <Item
          src={''}
          title={''}
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