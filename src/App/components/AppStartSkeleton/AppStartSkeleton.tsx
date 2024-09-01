import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { Colors } from '@UI/Colors';

export function AppStartSkeleton(): JSX.Element {
  return (
    <ContentLoader
      width="100%"
      height="100%"
      backgroundColor={Colors.secondary}
      opacity={0.2}
    >
      <Rect x="25%" y="5" rx="20" ry="20" width="50%" height="40" />

      <Rect x="3%" y="60" rx="20" ry="20" width="95%" height="50" />

      <Rect x="3%" y="130" rx="20" ry="20" width="45%" height="145" />
      <Rect x="3%" y="285" rx="4" ry="4" width="45%" height="13" />
      <Rect x="52%" y="130" rx="20" ry="20" width="45%" height="145" />
      <Rect x="52%" y="285" rx="4" ry="4" width="45%" height="13" />

      <Rect x="3%" y="340" rx="20" ry="20" width="45%" height="145" />
      <Rect x="3%" y="495" rx="4" ry="4" width="45%" height="13" />
      <Rect x="52%" y="340" rx="20" ry="20" width="45%" height="145" />
      <Rect x="52%" y="495" rx="4" ry="4" width="45%" height="13" />

      <Rect x="3%" y="560" rx="20" ry="20" width="45%" height="145" />
      <Rect x="3%" y="715" rx="4" ry="4" width="45%" height="13" />
      <Rect x="52%" y="560" rx="20" ry="20" width="45%" height="145" />
      <Rect x="52%" y="715" rx="4" ry="4" width="45%" height="13" />
    </ContentLoader>
  );
}
