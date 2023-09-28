import React from 'react';
import grainSvg from './grain.svg';
type Props = {
  opacity: number;
};

function Grain({ opacity }: Props) {
  return (
    <div
      style={{ opacity, background: `url(${grainSvg})` }}
      className='w-screen h-screen pointer-events-none absolute inset-0 select-none mix-blend-difference'
    ></div>
  );
}

export default Grain;
