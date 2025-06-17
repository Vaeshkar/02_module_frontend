import { Suspense } from 'react';
import { Loading } from '../components';
import RenderPost from '../components/RenderPost';

export default function Post() {
  return (
    <Suspense fallback={<Loading />}>
      <RenderPost />
    </Suspense>
  );
}
