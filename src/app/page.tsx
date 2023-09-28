import Blog from '@/components/blog';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto min-h-screen   text-sm '>
      <h1 className='my-8 font-[300] text-gray-600'>Azdine Bouali</h1>
      <span className='text-sm text-gray-500 bg-gray-100 px-2 rounded-full font-[400] border'>
        available
      </span>

      <p>
        I am a fullstack web developer from Morocco. I have a passion for
        creating beautiful, responsive, and performant websites. I am currently
        working as a freelancer and looking for new opportunities.
      </p>
      <p>
        i am currently working on a project for a client , i am using nextjs and
        gsap
      </p>
      <Projects />
      <Blog />
    </main>
  );
}
