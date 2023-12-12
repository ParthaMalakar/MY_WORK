import React from 'react';
 import react from '../../assets/react.svg'
 import boot from '../../assets/Bootsrap.png'
 import cpp from '../../assets/cpp.png'
 import c from '../../assets/c.png'
 import css from '../../assets/css.png'
 import express from '../../assets/express.png'
 import fire from '../../assets/firebase.png'
 import py from '../../assets/python.png'
 import tail from '../../assets/tailwind.png'
const Skills = () => {
  return (
    <div>
          <section className="bg-slate-300 space-y-3">
    <h3 className="section-title pb-4 pt-3">My Skills</h3>
    
<div className="grid gap-3 grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto">
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={react} alt="" />
    <h2 className='text-center font-medium'>React</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg '>
        
        <img className='font-extrabold h-20 w-20 p-2' src="https://i.ibb.co/z2fyw8N/download-pngk.png" alt="" />
    <h2 className='text-center font-medium'>Node js</h2>
    </div>
    
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={cpp} alt="" />
    <h2 className='text-center font-medium'>C++</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={c} alt="" />
    <h2 className='text-center font-medium'>C</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={css} alt="" />
    <h2 className='text-center font-medium'>CSS</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={express} alt="" />
    <h2 className='text-center font-medium'>Express Js</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={fire} alt="" />
    <h2 className='text-center font-medium'>Firebase</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={tail} alt="" />
    <h2 className='text-center font-medium'>Tailwind</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={py} alt="" />
    <h2 className='text-center font-medium'>Python</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src={boot} alt="" />
    <h2 className='text-center font-medium'>Bootstrap</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src="https://i.ibb.co/L0PKhmr/download-pnga.png" alt="" />
    <h2 className='text-center font-medium'>MongoDB</h2>
    </div>
    <div className='bg-white mx-auto rounded-lg'>
        
        <img className='font-extrabold h-20 w-20 p-2' src="https://i.ibb.co/b1RYXHK/download-png0.png" alt="" />
    <h2 className='text-center font-medium'>ASP.Net</h2>
    </div>
</div>
    </section>
    </div>
  );
};
 
export default Skills;