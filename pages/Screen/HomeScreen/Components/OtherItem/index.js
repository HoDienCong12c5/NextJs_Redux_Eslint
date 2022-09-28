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
        width={'100%'}
        height={'90%'}
        // fullSize={'width: 500px'}
      />
      <Title > Loại: {data?.type}</Title>
      <Details >{des}</Details>
    </ItemOther>
  )
}
const onClick=(id, name)=>{
  const router = useRouter()
  router.push(`${RoutePage.productDetails.path}`,`${RoutePage.productDetails.as}/?name=${name}`, { shallow: true })
}

const OtherItem = ({listData}) => {
  console.log({listData});
  const renderDesktop = ()=>{
    return(
      <ContainerOther>
        {
          listData?.length >0 && (
            listData.map(item=>(
              <Item
              key={item.id}
              onClick={()=>onClick(item.id, item.name)}
              data={item}
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