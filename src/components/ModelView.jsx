import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import React from "react";
import Lights from "./Lights";
import IphoneModel from "./IphoneModel";
import { Suspense } from "react";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full ${
        index == 2
      } ? 'right-[-100%]' : ''`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />

      <group ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
        onAfterRender={()=> setRotationState(controlRef.current.getAzimuthalAngle())}
      >
        <Suspense
        fallback={
          <Html>
            <div>Loading...</div>
          </Html>
        }
      >
        <IphoneModel 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
        />
      </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
