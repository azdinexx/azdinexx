import React from 'react';
import { Facebook } from './icones/fb';
import { Linkedin } from './icones/linkedin';

function Footer() {
  return (
    <footer className='max-w-2xl mx-auto border-t py-4 flex justify-between mt-20 text-gray-700 items-center'>
      <span className='  text-sm font-bold'>azdine bouali</span>
      <div className='flex gap-2'>
        <Facebook />
        <Linkedin />
      </div>
    </footer>
  );
}

export default Footer;
