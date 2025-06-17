import { useLoaderData } from 'react-router-dom';

export default function RenderPosts() {
  const { posts } = useLoaderData();

  if (!posts || posts.length === 0) return <p>No posts found.</p>;

  return (
    <div>
      <h1 className='text-2xl font-bold mb-6 text-center'>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li className='bg-base-300 shadow-md p-4 mb-4' key={post.id}>
            <h2 className='text-xl font-bold mb-4 border-b-2'>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}