// import React, { Suspense } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// function IphoneModel(props) {
//   const { scene } = useGLTF("/iphone-11.glb");
//   const texture = useLoader(THREE.TextureLoader, "/TelaPrincipal.jpeg");
//
//   React.useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.material.color.set('#cccccc');
//       }
//     });
//   }, [scene]);
//
//   return (
//     <group {...props}>
//       <primitive object={scene} />
//       {/* Ajuste fino da posição e tamanho do plano para encaixar na tela */}
//       <mesh position={[0, 0.1, 0.6]} rotation={[0, 0, 0]}>
//         <planeGeometry args={[1.8, 2.8]} />
//         <meshBasicMaterial map={texture} toneMapped={false} />
//       </mesh>
//     </group>
//   );
// }

// function MacbookModel(props) {
//   const { scene } = useGLTF("/macbook-pro.glb");
//   React.useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.material.color.set('#444');
//       }
//     });
//   }, [scene]);
//   return <primitive object={scene} {...props} />;
// }

// export default function IphoneViewer() {
//   return null;
// }

// Necessário instalar: npm install three @react-three/fiber @react-three/drei 