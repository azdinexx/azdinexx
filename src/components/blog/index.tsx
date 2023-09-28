import React from 'react';

function Blog() {
  return (
    <section>
      <h1 className='font-bold'>Blog</h1>
      <div className='my-6 flex gap-4 flex-col'>
        {posts.length === 0 ? (
          <p className='text-gray-500'>No posts yet</p>
        ) : (
          posts.map((post, i) => (
            <article
              key={post.title + i}
              className='flex justify-between items-start '
            >
              <span className='font-semibold underline'>{post.title}</span>
              <span className=''>{post.date}</span>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Blog;

const posts: any[] = [];
