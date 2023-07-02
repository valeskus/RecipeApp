import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { Colors } from '@UI/Colors';

export function CategoryListSkeleton(): JSX.Element {
  return (
    <ContentLoader
      width={'100%'}
      height={'100%'}
      backgroundColor={Colors.secondary}
      opacity={0.2}
    >
      <Rect x="3%" y="10" rx="20" ry="20" width="43%" height="135" />
      <Rect x="3%" y="155" rx="4" ry="4" width="43%" height="13" />
      <Rect x="53%" y="10" rx="20" ry="20" width="43%" height="135" />
      <Rect x="53%" y="155" rx="4" ry="4" width="43%" height="13" />

      <Rect x="3%" y="210" rx="20" ry="20" width="43%" height="135" />
      <Rect x="3%" y="355" rx="4" ry="4" width="43%" height="13" />
      <Rect x="53%" y="210" rx="20" ry="20" width="43%" height="135" />
      <Rect x="53%" y="355" rx="4" ry="4" width="43%" height="13" />

      <Rect x="3%" y="410" rx="20" ry="20" width="43%" height="135" />
      <Rect x="3%" y="565" rx="4" ry="4" width="43%" height="13" />
      <Rect x="53%" y="410" rx="20" ry="20" width="43%" height="135" />
      <Rect x="53%" y="565" rx="4" ry="4" width="43%" height="13" />
    </ContentLoader>
  );
}
