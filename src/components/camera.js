import React, { Component } from 'react';
import ReactThree from 'react-three-renderer';
import * as THREE from 'three';

export class Camera extends Component {
  render() {
    var MainCameraElement = React.createElement(
      ReactThree.PerspectiveCamera,
      {name:'maincamera', fov:'75', aspect:this.props.width/this.props.height,
       near:1, far:5000,
       position:new ReactThree.Vector3(0,0,600), lookat:new ReactThree.Vector3(0,0,0)});

    return React.createElement(
        ReactThree.Renderer,
        {width:this.props.width, height:this.props.height},
        React.createElement(
            ReactThree.Scene,
            {width:this.props.width, height:this.props.height, camera:'maincamera'},
            MainCameraElement,
            React.createElement({}, this.props.cupcakedata)
        )
    );
  }
}
