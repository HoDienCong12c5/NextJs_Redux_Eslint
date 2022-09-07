import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, useFBX } from '@react-three/drei'

import * as THREE from 'three'

const TextureLoader = require('three/src/loaders/TextureLoader')

const Scene = () => {
  // const colorMap = useLoader(TextureLoader, '../../../PavingStones092_1K_Color.jpg')
  const fbx = useFBX('../../../char.fbx')

  return <>
    <primitive object={fbx} scale={0.01} />
    {/* <meshStandardMaterial map={colorMap} /> */}
  </>
}

export default function App () {
  return (
    <div className='App' style={{ height: 600 }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Scene />
          <OrbitControls />

          {/* <Environment preset='park' background /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}
