import Link from 'next/link';
import React from 'react';

function Projects() {
  return (
    <section>
      <h1 className='font-bold '>Projects</h1>

      <div className='grid grid-cols-3 gap-5 my-6'>
        {projects.map((project, i) => (
          <article key={project.url + i}>
            <Link href={project.url} target='_blank'>
              <span className='font-semibold underline'>{project.name}</span>
            </Link>
            <div className='flex gap-1'>
              {project.url && (
                <Link
                  href={project.url}
                  target='_blank'
                  className='text-xs text-gray-700  mt-2 px-2 rounded-full font-[400] border hover:ring-1'
                >
                  live
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target='_blank'
                  className='text-xs text-gray-700  mt-2 px-2 rounded-full font-[400] border hover:ring-1'
                >
                  repo
                </Link>
              )}
            </div>
            <p className='text-justify'>{project.description}</p>
            <div className='flex gap-1 flex-wrap'>
              {project.technologies.map((tech, i) => (
                <span
                  key={tech + i}
                  className='text-xs text-gray-500 bg-gray-100 px-2 rounded-full font-[400] border'
                >
                  {tech}
                </span>
              ))}
            </div>
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
    description: 'Minimal Portfolio using Nextjs and tailwindCss',
    technologies: ['nextJS', 'tailwind css'],
    url: 'https://azdinexx.vercel.app',
    github: 'https://github.com/azdinexx/azdinexx',
  },
  {
    name: 'Beni Ouarain',
    description: 'E-commerce website, using Nextjs and Shopify',
    technologies: ['nextJS', 'tailwind css', 'gsap', 'Shopify API'],
    url: 'https://azdinexx.vercel.app',
  },
];
