import { useGLTF } from '@react-three/drei'

export default function Avatar({ scale = 1.4, position = [0, -1.2, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF('/avatar.glb')
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  )
}

useGLTF.preload('/avatar.glb')
