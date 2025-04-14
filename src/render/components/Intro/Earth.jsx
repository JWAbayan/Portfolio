import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Earth(props) {
  const { nodes, materials } = useGLTF('/Earth.gltf')
  const meshRef = useRef()

  useFrame((state, delta)=>{
    meshRef.current.rotation.y += delta;
  })

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027.geometry}
        material={materials.Clouds}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027_1.geometry}
        material={materials.Light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027_2.geometry}
        material={materials['Building Base']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027_3.geometry}
        material={materials.Grass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027_4.geometry}
        material={materials.Water}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027_5.geometry}
        material={materials.Dirt}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027_6.geometry}
        material={materials.Leaves}
      />
    </group>
  )
}

useGLTF.preload('/Earth.gltf')

