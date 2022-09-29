import React, { useEffect, useState, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'
const Container = styled.div`
height: 100%;
min-width: 300px;
min-height: 200px;

width: 100%;
`
const AnyReactComponent = ({ text }) =>
  <div style={{ background: 'red', padding: 10, borderRadius: 10 }}>
    {text}
  </div>

export default function GGMap () {
  const dataRef = useRef({
    lat: 10.826240950784769,
    lng: 106.64148818650716,
    lat1: 10.526240950784769,
    lng2: 106.34148818650716
  })
  const [data, setData] = useState('')
  useEffect(() => {
    setData(dataRef.current)
  }, [])
  const defaultProps = {
    center: {
      lat: dataRef.current.lat1,
      lng: dataRef.current.lng2
    },
    zoom: 15
  };
  const onClick = (key, childProps) => {
    console.log('====================================');
    console.log({ key });
    console.log({ childProps });
    console.log({ data });
    console.log('====================================');
    dataRef.current.lat1 = dataRef.current.lat
    setData(dataRef.current)
  }

  return (
    // Important! Always set the container height explicitly
    <Container >
      
      <GoogleMapReact
        onChildClick={onClick}
        onBoundsChange={onClick}
        onChangeHandler={onClick}
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: data.lat,
          lng: data.lng
        }}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={dataRef.current.lat}
          lng={dataRef.current.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </Container>
  );
}