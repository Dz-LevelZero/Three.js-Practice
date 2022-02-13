import { MeshDistortMaterial, Sphere } from "@react-three/drei"

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial 
        color="#8352FD"
        attach="material"
        distort={[0.3]}
        speed={2.5}
        roughness={0.5}
      />
    </Sphere>
  )
}

export default AnimatedSphere