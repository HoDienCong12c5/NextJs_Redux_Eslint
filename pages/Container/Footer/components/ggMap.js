import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Img from 'common/images'
import Image from 'components/Image'
const Container = styled.div`
  width: 300px;
  height: 200px;
  @media screen and (max-width: 768px) {
    width:100%;
    height: 250px;
  }
`
const ContainerItem = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
const AnyReactComponent = ({ text }) => (
  <ContainerItem>
    <Image src={Img.footer.iconGPS} width={30} height={35} />
  </ContainerItem>
)
export default function GGMap({ dataContact }) {
  console.log('dataContact.xAddress', dataContact.xAddress)
  const defaultProps = {
    center: {
      lat: Number(dataContact.xAddress),
      lng: Number(dataContact.yAddress),
    },
    zoom: 14,
  }

  return (
    <Container>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        // bootstrapURLKeys={{ key: "AIzaSyBcDkHI6bApA-Q7rmIGVOu61Rtb8PO2Cgs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={Number(dataContact.xAddress)}
          lng={Number(dataContact.yAddress)}
          text="My Marker"
        />
      </GoogleMapReact>
    </Container>
    // Important! Always set the container height explicitly
    // <div style={{ height: '100vh', width: '100%' }}>

  // </div>
  )
}
// import React, { useEffect, useState, useRef } from "react";
// import GoogleMapReact from "google-map-react";
// import styled from "styled-components";
// import Loading from "components/Loading";
// const Container = styled.div`
//   width: 300px;
//   height: 200px;
// `;
// const AnyReactComponent = ({ text }) => (
//   <div style={{ background: "red", padding: 10, borderRadius: 10 }}>''</div>
// );

// export default function GGMap({ dataContact }) {
//   const dataRef = useRef(null);
//   const [data, setData] = useState("");
//   useEffect(() => {
//     dataRef.current = dataContact;
//   }, []);
//   const onClick = (key, childProps) => {
//     dataRef.current.lat1 = dataRef.current.lat;
//     setData(dataRef.current);
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <Container>
//       {dataContact ? (
//         <GoogleMapReact
//           onChildClick={onClick}
//           onBoundsChange={onClick}
//           onChangeHandler={onClick}
//           bootstrapURLKeys={{ key: "" }}
//           defaultCenter={{
//             lat: dataContact.xAddress,
//             lng: dataContact.yAddress,
//           }}
//           defaultZoom={14}
//         >
//           <AnyReactComponent
//             lat={dataContact.xAddress}
//             lng={dataContact.yAddress}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       ) : (
//         <Loading />
//       )}
//     </Container>
//   );
// }
