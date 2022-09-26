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
const Item=({data, des})=>{
 
  return (
    <ItemOther >
      <ImageCustom
        src={data?.src}
      />
      <Title > {data?.name}</Title>
      <Details >{des}</Details>
    </ItemOther>
  )
}
const onClick=(id, name)=>{
  const router = useRouter()
  router.push(`${RoutePage.productDetails.path}`,`${RoutePage.productDetails.as}/?name=${name}`, { shallow: true })
}

const OtherItem = ({listData}) => {
  const renderDesktop = ()=>{
    return(
      <ContainerOther>
        {
          listData?.length >0 && (
            listData.map(item=>(
              <Item
              key={item.id}
              onClick={()=>onClick(item.id, item.name)}
              data={item.data}
              desc={Button.detail}
            />
            ))
          )
        }
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