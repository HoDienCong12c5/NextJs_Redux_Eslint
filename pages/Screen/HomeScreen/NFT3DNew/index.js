

import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
// import { GUI } from 'dat.gui'
import Stats from 'three/examples/jsm/libs/stats.module'
let camera
let controls = null
let scene
let renderer
const NFT3DNew = () => {
  const [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    if (!isLoad) {
      init()
    }
  }, [isLoad])

  const init = () => {
    setIsLoad(true)
    // load color:
    const texture = new THREE.TextureLoader().load(
      // 'https://ipfs.pantograph.app/ipfs/QmRY7j2m8EyjcVcbqx3icVJUNnHsYdHQFmctP8wR6pnjGC?filename=Guardian_Color.png'
      '../../../basicColor.png'
    )
    const material = new THREE.MeshBasicMaterial({ map: texture })
    //
    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    // add light
    const light = new THREE.PointLight()
    light.position.set(0.8, 1.4, 1.0)
    scene.add(light)
    const ambientLight = new THREE.AmbientLight()
    scene.add(ambientLight)
    // stup canvas
    renderer = new THREE.WebGLRenderer()
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0.8, 0, 1.0)
    renderer.setSize(400, 400)
    const div3d = document.getElementById('nft-3d')
    div3d.appendChild(renderer.domElement)
    // add controls to mouse
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05

    controls.screenSpacePanning = true
    // controls.minPolarAngle = Math.PI / 2
    controls.maxPolarAngle = Math.PI / 2
    controls.target.set(0, 1, 0)
    // controls.enableZoom = false
    // new modal 3d
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material2)

    const loadFBX = new FBXLoader()

    // setup animation
    const stats = Stats()

    let mixer
    let modelReady = false

    let activeAction
    const animationActions = []
    let lastAction
    const clock = new THREE.Clock()
    // load 3d
    loadFBX.load(
      '../../../char.fbx',
      (object) => {
        object.traverse((child) => {
          // child.material = material
        })
        mixer = new THREE.AnimationMixer(object)
        let animationAction = mixer.clipAction(object?.animations[0])
        animationActions.push(animationAction)
        // animationsFolder.add(animations, 'default')
        activeAction = animationActions[0]

        animationAction = mixer.clipAction(object?.animations[1])
        animationActions.push(animationAction)
        // animationsFolder.add(animations, 'default2')

        object.scale.set(0.01, 0.005, 0.01)
        scene.add(object)
        console.log('object1')

        loadFBX.load(
          '../../../an1.fbx',
          (object) => {
            object.traverse((child) => {
              child.material = material
            })
            const animationAction = mixer.clipAction(object?.animations[0])

            animationActions.push(animationAction)
            // animationsFolder.add(animations, 'samba')

            loadFBX.load(
              '../../../an2.fbx',
              (object) => {
                object.traverse((child) => {
                  child.material = material
                })
                console.log('object3', object)
                const animationAction = mixer.clipAction(object?.animations[0])

                animationActions.push(animationAction)
                // animationsFolder.add(animations, 'laughing')
                modelReady = true
              },
              () => {},
              (e) => { }
            )
          },
          (e) => {},
          (e) => {}
        )
      },
      () => {},
      (e) => {
        console.log('====================================')
        console.log('e', e)
        console.log('====================================')
      }
    )
    // add 3d
    // scene.add(cube)
    camera.position.z = 5
    // const gui = new GUI()
    // const animationsFolder = gui.addFolder('Animations')
    // animationsFolder.open()
    div3d.appendChild(stats.dom)
    const animations = {
      default: function () {
        console.log('action default')
        setAction(animationActions[0])
      },
      default2: function () {
        console.log('action defaul2t')
        setAction(animationActions[1])
      },
      samba: function () {
        console.log('action samba')
        setAction(animationActions[2])
      },
      laughing: function () {
        console.log('action laughing')
        setAction(animationActions[3])
      }
    }
    const setAction = (toAction) => {
      if (toAction !== activeAction) {
        lastAction = activeAction
        activeAction = toAction
        lastAction.stop()
        activeAction.reset()
        activeAction.play()
      }
    }
    function animate () {
      requestAnimationFrame(animate)

      controls.update()
      if (modelReady) {
        mixer.update(clock.getDelta())
      }
      renderer.render(scene, camera)
      stats.update()
    }
    animate()
  }

  return (
    <div id='nft-3d'>
      NFT3DNew asdasd asdasd
      <progress value='0' max='100' id='progressBar' />
    </div>
  )
}
export default NFT3DNew
