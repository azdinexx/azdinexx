import Blog from '@/components/blog';
import Projects from '@/components/projects';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto min-h-screen   text-sm '>
      <h1 className='my-8 font-[300] text-gray-600'>Azdine Bouali</h1>
      <span className='text-sm text-gray-500 bg-gray-100 px-2 rounded-full font-[400] border'>
        Contact Me
      </span>

      <p>
        Hey, i am <span className='font-semibold'> Azdine Bouali</span> aka{' '}
        <Link href={'https://github.com/azdinexx'} target='_blank'>
          <span className='text-xs bg-gray-200 px-2 py-1 mx-2 rounded-md text-gray-800 cursor-pointer hover:ring-1'>
            azdinexx
          </span>{' '}
        </Link>
        , i am a full stack developer form casablanca, morocco.
      </p>
      <p>
        I have a technical degree in computer science and i work full-time as a
        fullstack developer for a company in casablanca.
      </p>
      <p>
        I am currently working on an e-commerce project using Nextjs and Shopify
        .
      </p>
      <Projects />
      <Blog />
    </main>
  );
}
