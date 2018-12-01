import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRandomImage } from './source';
export default class Tile extends Component {
  static propTypes = {
    color: PropTypes.shape({
      r: PropTypes.number,
      g: PropTypes.number,
      b: PropTypes.number,
    }),
    height: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  };

  state = {
    scale: 100,
  };

  render() {
    const { color: { r, g, b }, height, width, x, y, } = this.props;
    const { scale } = this.state;

    const photo = getRandomImage();
    const tileStyle = {
      background: `url(${photo})`,
      backgroundColor: `rgba(${ r }, ${ g }, ${ b }, ${ 0.9 })`,
      backgroundSize: `cover`,
      position: 'absolute',
      height: `${ height * scale }%`,
      width: `${ width * scale }%`,
      top: `${ y * scale }%`,
      left: `${ x * scale }%`,
      backgroundBlendMode: `lighten`
    };

    return (
      <div style={ tileStyle }></div>
    );
  }
}
