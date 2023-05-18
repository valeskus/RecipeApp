import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

export function CategoryListSkeleton(): JSX.Element {
  return (
    <ContentLoader viewBox="0 0 380 70">
      <Rect x="10" y="1" rx="4" ry="4" width="170" height="130" />
      <Rect x="10" y="150" rx="4" ry="4" width="170" height="13" />

      <Rect x="200" y="1" rx="4" ry="4" width="170" height="130" />
      <Rect x="200" y="150" rx="4" ry="4" width="170" height="13" />
    </ContentLoader>
  );
}
