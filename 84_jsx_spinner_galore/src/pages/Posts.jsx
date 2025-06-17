import { Suspense } from 'react';
import { Loading } from '../components';
import RenderPosts from '../components/RenderPosts';

export default function Posts() {
  return (
    <Suspense fallback={<Loading />}>
      <RenderPosts />
    </Suspense>
  );
}
