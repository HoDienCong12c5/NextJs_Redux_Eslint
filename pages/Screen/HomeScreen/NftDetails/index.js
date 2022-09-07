
import React, { useEffect, useRef, useState, Suspense } from 'react'
import images from 'common/images'
import {
  MainContainer,
  DetailsContainer,
  LeftDetailsContainer,
  RightDetailsContainer,
  BackContainer,
  ImageWrapper,
  NftName,
  PriceContainer,
  LeftPriceContainer,
  TokenOption,
  Quantity,
  QuantityInput,
  TextWarning,
  ButtonView3D
} from './style'
import NFT3DNew from '../NFT3DNew'
import MarketplaceButton from '../Components/Button'
// import AboutNft from '../Components/AboutNft'
// import PropertiesDetails from '../Components/PropertiesDetails'
const NftDetails = (props) => {

  const [view3D, setView3D] = useState(false)
  const tokenSymbols = new Array(3)
  return (
    <MainContainer>
      <BackContainer>
        <button
          onClick={() => {}}
        >
          <img src={images?.icBack} />
        </button>
      </BackContainer>

      <DetailsContainer>
        <LeftDetailsContainer>
          {
            view3D ? (
              <>
                <NFT3DNew />
                <div>adhjfghjsj</div>
              </>
            ) : (
              <ImageWrapper >
                <img src={'https://ipfs.pantograph.app/ipfs/QmWe2PcLEfgou6gyL1qutdJxrfodgJjbbB48wHqWhuoEvs?filename=Frame-1_new.png'} />
                <ButtonView3D
                  type={1}
                  onClick={() => { setView3D(true) }}
                >
                    View 3D
                </ButtonView3D>
              </ImageWrapper>
            )
          }

        </LeftDetailsContainer>
        <RightDetailsContainer>
          <NftName textTransform >{'sphereDetails.name'}</NftName>
          <PriceContainer>
            <LeftPriceContainer>
              <div style={{ width: '30%', minWidth: 250 }}>$5 ≈ 10 YU </div>
              <div style={{ display: 'flex', marginLeft: 10 }}>
                {tokenSymbols?.length > 0 &&
                  tokenSymbols.map((token) => (
                    <TokenOption
                      onClick={() => {}}
                      className={'selected'}
                      key={token.tokenAddress}
                    >
                      {token.symbol}
                    </TokenOption>
                  ))}
              </div>
            </LeftPriceContainer>

            <div style={{ width: '100%', display: 'flex' }}>
              <Quantity>
                <img src={images.icMinus} className='MR0' onClick={() => {}} style={{ width: 30, cursor: 'pointer', opacity: 1}} />
                <img src={images.icPlus} className='ML0' onClick={() => {}} style={{ width: 30, cursor: 'pointer', opacity: 100 }} />
              </Quantity>

            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>

              <MarketplaceButton onClick={() => { }}>
                Buy now
              </MarketplaceButton>
            </div>

          </PriceContainer>
          {/* <PropertiesDetails isStore showDetails={false} /> */}
        </RightDetailsContainer>
        <div className='MT26' style={{ width: '100%' }}>
          {/* <AboutNft description={'sphereDetails?.description'} /> */}
        </div>
      </DetailsContainer>
    </MainContainer>
  )
}
export default NftDetails
