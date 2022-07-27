// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// // import ReduxServices from 'common/reduxService'

// import {
//   Container,
//   Input,
//   Buttons,
//   ChartContainer
// } from './styled'
// import { validateAddress } from 'common/function'
// import Link from 'next/link'
// import Web3Service from 'common/web'
// import { fireStores } from 'services/firebase'
// import { collection, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore'
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { ContactShadows, useGLTF } from '@react-three/drei'
// const ADDRESS = '0xE66D10adACcec763694DA8800944eb10d091C668'
// const HomeScreen = () => {
//   // store
//   const state = useSelector(state => state.getName)

//   // use state
//   const [nameNew, setNameNew] = useState('')
//   const [dataFi, setDataFi] = useState([])
//   const [balance, setBalance] = useState(0)
//   const [isSubmit, setIsSubmit] = useState(false)
//   // use effect
//   useEffect(() => {
//     const getbalace = async () => {
//       const balance = await Web3Service.getBalance(ADDRESS)
//       setBalance(balance)
//     }
//     getbalace()
//   }, [])
//   const setnameNew = () => {
//     if (validateAddress(nameNew)) {
//       // alert(nameNew)
//       setIsSubmit(true)
//     } else {
//     //   inItAddress()
//     }
//   }
//   const getDataFirebase = async () => {
//     const arr = []
//     const querySnapshot = await getDocs(collection(fireStores, 'User'))
//     querySnapshot.forEach(async (doc) => {
//       const data = doc.data()
//       data.id = doc.id
//       // const temp={
//       //   id:doc.id,
//       //   name:data.name,
//       //   address:data.address,
//       //   pass:data.pass,
//       //   addressWallet:data.addressWallet,
//       //   privateKey:data.privateKey,
//       //   sdt:data.sdt,
//       //   token:data.token,
//       //   x:data.x,
//       //   y:data.y,
//       //   image:data.image,
//       //   checkWorker:data.checkWorker,
//       // }
//       arr.push(data)
//       console.log({ data })
//     })
//     setDataFi(arr)
//   }
//   const setNameFireBase = async (id, name) => {
//     const querySnapshot = await doc(fireStores, 'User', id)
//     await updateDoc(querySnapshot, {
//       name
//     })
//   }
//   const setAddressFireBase = async (noteNew, address) => {
//     const docRef = await addDoc(collection(fireStores, 'User'), {
//       name: noteNew
//     })
//   }
//   const send = async () => {
//     // const result = await Web3Service.sendTransaction(ADDRESS, ADDRESS, 1)
//   }

//   useEffect(() => {
//     send()

//     getDataFirebase()
//   }, [])
//   const renderLineChart = () => {
//     const data = []
//     for (let index = 0; index < 10; index++) {
//       const element = {
//         name: 'Page ' + index,
//         uv: 400 - (index * Math.random() * 100),
//         pv: 2400,
//         amt: 2400
//       }
//       data.push(element)
//     }
//     return (
//       <ChartContainer >
//         <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//           <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//           <CartesianGrid stroke="#ccc" strokeDasharray="1 5" />
//           <XAxis dataKey="name" />
//           <YAxis />
//         </LineChart>
//       </ChartContainer>

//     )
//   }

//   return (
//     <Container>
//       <div>
//         home {state} lalalalal
//       </div>
//       <Link
//         href={
//           {
//             pathname: '/Screen/ProfileScreen',
//             query: {
//               id: '123',
//               name: 'congga'
//             }
//           }
//         }
//         // as={'/profile/123/congga'}
//       >
//         <a style={{ color: 'red' }}>Home</a>
//       </Link>
//       <Link
//         href={'/Screen/ProfileScreen/:id'}
//         as={'/profile/123'}
//       >
//         <a style={{ color: 'red' }}>Profile</a>
//       </Link>
//       <ChartContainer>
//           balance :{ balance }
//       </ChartContainer>
//       <Input
//         value={nameNew}
//         onChange={e => setNameNew(e.target.value)}
//         placeholder='Enter name'
//       />
//       <Input
//         value={nameNew}
//         onChange={e => setNameNew(e.target.value)}
//         placeholder='Enter value'
//       />
//       {/* <CustomLink route={'/ProfileScreen' }>
//           Profile
//       </CustomLink>npm run */}
//       <Buttons
//         isSubmit={isSubmit}
//         onClick={() => setNameFireBase()}
//       >
//           Submit
//       </Buttons>
//       {
//         renderLineChart()
//       }
//       {
//         dataFi.map((item, index) => {
//           return (
//             <div onClick={() => setNameFireBase(item.id, 'congga')} key={index}> {item.name}</div>
//           )
//         })
//       }
//     </Container>
//   )
// }
// export default HomeScreen
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image } from '@react-three/drei'

function Images () {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="https://imageonline.co/image.jpg" />
      <Image position={[2, 0, 1]} scale={3} url="https://imageonline.co/image.jpg" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="https://imageonline.co/image.jpg" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="https://imageonline.co/image.jpg" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="https://imageonline.co/image.jpg" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="https://imageonline.co/image.jpgg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2, 1]} url="https://imageonline.co/image.jpg" />
    </group>
  )
}

export default function App () {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={4} pages={3}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
            <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
            <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}
