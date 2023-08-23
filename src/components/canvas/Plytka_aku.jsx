import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./models/aku-test.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.9} groundColor='black' />
      <spotLight
        position={[0, 0, 10]}
        angle={2}
        penumbra={1}
        intensity={10}
        // castShadow
        shadow-mapSize={104}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={1}
        position={isMobile ? [0, -3, -2.2] : [0, 0, 0]}
        rotation={[0.1, -0.9, -0.2]}
      />
    </mesh>
  );
};

export const AkuCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 5], fov: 3, near: 0.1 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          //minPolarAngle={Math.PI / 1.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};


/*
dokumantacja do reast tree 
https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

Ruchome animacje w formacie FBX, przykład na filmku:
https://www.youtube.com/watch?v=pGMKIyALcK0
*/
/*
{
  "name": "d3_portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^3.11.0",
    "@react-three/drei": "^9.68.3",
    "@react-three/fiber": "^8.13.0",
    "framer-motion": "^10.12.10",
    "gltfjsx": "^6.2.11",
    "maath": "^0.5.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.1",
    "react-tilt": "^1.0.2",
    "react-vertical-timeline-component": "^3.6.0",
    "read-pkg-up": "^10.1.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "postcss": "^8.4.28",
    "tailwindcss": "^3.3.2",
    "vite": "^4.3.2"
  }
}

*/