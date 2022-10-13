import React, { useEffect, useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Loading from 'components/Loading'
const Container = styled.div`
height: 100%;
min-width: 300px;
min-height: 200px;

width: 100%;
`
const AnyReactComponent = ( { text } ) =>
  <div style={{ background: 'red', padding: 10, borderRadius: 10 }}>
    ''
  </div>

export default function GGMap ( {dataContact} ) {
  const dataRef = useRef( null )
  const [data, setData] = useState( '' )
  useEffect( () => {
    dataRef.current=dataContact
  }, [] )
  const onClick = ( key, childProps ) => {
    dataRef.current.lat1 = dataRef.current.lat
    setData( dataRef.current )
  }

  return (
    // Important! Always set the container height explicitly
    <Container >
      {
        dataContact ?(
          <GoogleMapReact
            onChildClick={onClick}
            onBoundsChange={onClick}
            onChangeHandler={onClick}
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={{
              lat: dataContact.xAddress,
              lng: dataContact.yAddress
            }}
            defaultZoom={14}
          >
            <AnyReactComponent
              lat={dataContact.xAddress}
              lng={dataContact.yAddress}
              text="My Marker"
            />
          </GoogleMapReact>
        ):(
          <Loading />
        )
      }

    </Container>
  )
}