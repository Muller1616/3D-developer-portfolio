import React, {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls , Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotlight
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
       />
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.75 : 0.75}
      position={isMobile ? [0,-3,-2.2] :[0,-3.25,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}

      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  const[isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    //Add event listener to check if the screen is mobile
    const mediaQuery = window.matchMedia('(max-width: 500px');
    //set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);
    //define the function to handle the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    //add the event listener to the media query
    mediaQuery.addEventListener('change',
      handleMediaQuery);
      //remove the event listener when the component is unmounted
      return() =>{
        mediaQuery.removeEventListener('change',
          handleMediaQueryChange);
      }
  }, [])

  return(
    <Canvas
      frameLoop="demand"
      shadows
      camera={{position: [20,3,5], fov:25}}
      gl={{ preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI /2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers