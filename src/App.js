import React, { Suspense } from "react";
import "./App.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import Porsche from "./components/Porsche";

export default function App() {
  
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere/>
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Porsche />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;