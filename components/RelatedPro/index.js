import React, {useMemo, useEffect} from 'react'
import Media from 'react-media'
import styled from 'styled-components'
import Image from '../Image'
import messages, { Color } from 'common/constants'
import ButtonBasic from '../ButtonBasic'
import NormalText, { MediumText, TitleText } from '../Text'

const RelatedProduct = ( { width='250px', height='250px', data, onClick,widthImg=90 } ) => {
  let widthFinal='250px'
  let heightFinal='250px'
  const checkWidth=()=>{
    if( width.includes( 'px' ) ||width.includes( '%' ) ){
      widthFinal=width
    }else{
      widthFinal=`${width}px`
    }
  }
  const checkHeight=()=>{
    if( height.includes( 'px' ) ||height.includes( '%' ) ){
      heightFinal=height
    }else{
      heightFinal=`${height}px`
    }
  }
  useMemo( checkWidth(),[] )
  useMemo( checkHeight(),[] )

  return (
    <ContainerPro
      height={heightFinal}
      width={widthFinal}
      className='radius-small'
    >
      <Image
        src={data?.src}
        width={`${widthImg}%`}
        height={'auto'}
        // fullSize={'width: 500px'}
      />
      <PricePro>{data?.price}</PricePro>
      <ButtonBasic
        onClick={()=>onClick( data )}
        title={messages.Button.buy}
      />
    </ContainerPro>
  )
}

export default React.memo( RelatedProduct )

const ContainerPro = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    max-width: 250px;
    max-height: 300px;
    padding: 10px;
    width:${props=> props.width};
    height:${props=> props.height};
`
const PricePro = styled( MediumText )`
    color:${Color.red};
    font-weight: bold;
`