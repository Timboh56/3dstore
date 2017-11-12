import jQuery from 'jquery';
import Camera from './camera';
import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ReactThree from 'react-three-renderer';
import * as THREE from 'three';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
      });
    };
  }

  render() {

    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (<ReactThree
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </ReactThree>);
  }
}

export default App;
