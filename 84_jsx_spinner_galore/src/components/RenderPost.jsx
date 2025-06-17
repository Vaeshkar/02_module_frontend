// https://jsonplaceholder.typicode.com/posts/1

import { useLoaderData } from 'react-router';

export default function Post() {
  const { post } = useLoaderData();

  if (!post || post.length === 0) return <p>No post found.</p>;

  return (
    <div>
      <h1 className='text-2xl font-bold mb-6 text-center'>One Blog Post</h1>
      <ul>
        <li className='bg-base-300 shadow-md p-4 mb-4'>
          <h1 className='text-xl font-bold mb-4 border-b-2'>{post.title}</h1>
          <p>{post.body}</p>
        </li>
      </ul>
    </div>
  );
}