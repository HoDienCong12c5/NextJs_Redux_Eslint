import React, { useState, useEffect } from 'react'
import messages from 'common/constants'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import firebase from 'services/firebase'
import Media from 'react-media'
import Container,{
  InforGeneral,
  InforLeft,
  InforRight,
  InforTitle,
  InforDes,
  InforPrice,
  ButtonBuy,
  ButtonAdd,
  Description,
  RelatedProduct
} from './styled'
import Image from 'components/Image'
const ProductDetails = ( { props } ) => {
  const routes = useRouter()
  const [product, setProduct] = useState( null )
  useEffect( () => {
    const getData = async() =>{
      const res = await firebase.FireStore.Product.getDataByID( props?.id )
      setProduct( res )
    }
    getData()
  }, [] )
  const renderDesktop = () => {
    return (
      <Container >
        <InforGeneral >
          <InforLeft>
            <Image
              src={product?.image}
              width={95}
            />
          </InforLeft>
        </InforGeneral>
        <InforRight>
          <InforTitle >{product?.name}</InforTitle>
          <InforTitle>Loại : {product?.type}</InforTitle>
          <InforDes>Thành phần: {product?.element}</InforDes>
          <InforDes>Số lượng: {Number( product?.number )}</InforDes>
          <InforDes>Đã bán: {Number( product?.sold )}</InforDes>
          <InforPrice>Giá : {product?.price}</InforPrice>
          <br />
          <div style={{display:'flex',}}>
            <ButtonBuy
              title={messages.Button.buy}
            />
            <ButtonBuy
              title={messages.Button.addCart}
            />
          </div>
        </InforRight>
      </Container>
    )
  }
  const renderMobile = () => {
    return (
      <>ad</>
    )
  }
  return (
    <div className='padding'>
      <Media query="(min-width: 768px)">
        {( match ) => {
          if ( match ) {
            return renderDesktop()
          }
          return renderMobile()
        }}
      </Media>
    </div>


  )
}
ProductDetails.getInitialProps = async ( { query } ) => {
  const { id } = query
  return { id }
}
export default ProductDetails