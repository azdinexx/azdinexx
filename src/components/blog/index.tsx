import React from 'react';

function Blog() {
  return (
    <section>
      <h1 className='font-bold'>Blog</h1>
      <div className='my-6 flex gap-4 flex-col'>
        {posts.map((post, i) => (
          <article
            key={post.title + i}
            className='flex justify-between items-start '
          >
            <span className='font-semibold underline'>{post.title}</span>
            <span className=''>{post.date}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;

const posts = [
  {
    title: 'How to use nextjs',
    description: 'this is a description',
    date: 'Sep 21, 2023',
  },
  {
    title: 'How to use TS',
    description: 'this is a description',
    date: 'Sep 21, 2023',
  },
  {
    title: 'How to use Vue',
    description: 'this is a description',
    date: 'Sep 21, 2023',
  },
  {
    title: 'How to use React',
    description: 'this is a description',
    date: 'Sep 21, 2023',
  },
];
