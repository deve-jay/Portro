import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

const Three = () => {
  return (
    <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
        
      }}
    >
      <ShaderGradient 
      cDistance={20}
      cPolarAngle={125}
      type="plane"
      brightness={3}
      positionX={-5}
      positionY={-0.9}
      positionZ={-2}
      rotationX={910}
      rotationY={45}
      rotationZ={40}
      color1="#A1EEBD"
      color2="#7BD3EA"
      color3="#F6F7C4"
      uDensity={0.4}
      uFrequency={5.5}
      uSpeed={0.3}
      uStrength={4.8}
      uTime={10}
      range="disabled"
      lightType="env"
      envPreset="dawn"
      grain="on"
      wireframe={false}
      reflection={1 }
      grainBlending={0.2}
      hoverState="disabled"
      toggleAxis={false}

      />
    </ShaderGradientCanvas>
  );
};

export default Three;
