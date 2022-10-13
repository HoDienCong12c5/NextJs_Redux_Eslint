import React from 'react'
import ContainerOther, {
  ImageCustom,
  Title,
  Details,
  ItemOther,
  BtnMore
} from './style'
import Media from 'react-media'
import messages, {Button, Title as Name, RoutePage} from 'common/constants'

import { useRouter } from 'next/router'
const Item=( {data, onClick} )=>{

  return (
    <ItemOther >
      <ImageCustom
        src={data?.src}
        width={'90%'}
        height={'auto'}
        // fullSize={'width: 500px'}
      />
      <Title > Loại: {data?.type}</Title>
      <BtnMore onClick={onClick} title={messages.Button.buy}/>
    </ItemOther>
  )
}

const OtherItem = ( {listData} ) => {
  const router = useRouter()
  const onClick=( id )=>{
    router.push( '/Screen/Home' )

    // router.push(`${RoutePage.home.path}`,`${RoutePage.productDetails.as}/?id=${id}`, { shallow: true })
  }

  const renderDesktop = ()=>{
    return(
      <ContainerOther>
        {
          listData?.length >0 && (
            listData.map( item=>(
              <Item
                key={item.id}
                onClick={()=>onClick( item.IDProduct )}
                data={item}
                desc={Button.detail}
              />
            ) )
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
    <Media query='(min-width:768px)'>
      {( match ) => {
        if ( match ) {
          return renderDesktop()
        }
        return renderDesktop()
      }}
    </Media>

  )
}

export default OtherItem