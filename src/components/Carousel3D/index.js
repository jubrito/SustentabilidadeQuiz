import React from 'react';
import styled from 'styled-components';
import {Carousel} from '3d-react-carousal';

export default function Carousel3D({ slides, autoplay, pause, interval }) {
  return (
    <Carousel slides={slides} autoplay={autoplay} pause={pause} interval={interval}/>
  )
}