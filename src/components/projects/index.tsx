import React from 'react';

function Projects() {
  return (
    <section>
      <h1 className='font-bold '>Projects</h1>

      <div className='grid grid-cols-3 gap-3 my-6'>
        {projects.map((project, i) => (
          <article key={project.url + i}>
            <span className='font-semibold underline'>{project.name}</span>
            <p className='text-justify'>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

const projects = [
  {
    name: 'Azdinexx',
    description:
      'the porfolio website for Azdine Bouali , a fullstack developer from morocco',
    technologies: ['nextjs', 'gsap'],
    url: 'https://azdinexx.vercel.app',
    github: 'https://github.com/azdinexx/azdinexx',
  },
  {
    name: 'Azdinexx',
    description:
      'the porfolio website for Azdine Bouali , a fullstack developer from morocco',
    technologies: ['nextjs', 'gsap'],
    url: 'https://azdinexx.vercel.app',
  },
  {
    name: 'Azdinexx',
    description:
      'the porfolio website for Azdine Bouali , a fullstack developer from morocco',
    technologies: ['nextjs', 'gsap'],
    url: 'https://azdinexx.vercel.app',
  },
  {
    name: 'Azdinexx',
    description:
      'the porfolio website for Azdine Bouali , a fullstack developer from morocco',
    technologies: ['nextjs', 'gsap'],
    url: 'https://azdinexx.vercel.app',
  },
];
