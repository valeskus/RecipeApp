import React from 'react';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';

import { Colors } from '@UI/Colors';

export function RecipeListSkeleton(): JSX.Element {
  return (
    <ContentLoader
      width={'100%'}
      height={'100%'}
      backgroundColor={Colors.secondary}
      opacity={0.2}
    >
      <Circle cx="10%" cy="30" r="24" />
      <Circle cx="31%" cy="30" r="24" />
      <Circle cx="90%" cy="30" r="24" />

      <Rect x="2%" y="75" rx="20" ry="20" width="43%" height="130" />
      <Rect x="5%" y="215" rx="4" ry="4" width="37%" height="13" />
      <Rect x="5%" y="237" rx="4" ry="4" width="33%" height="15" />
      <Rect x="5%" y="265" rx="4" ry="4" width="17%" height="8" />
      <Rect x="5%" y="280" rx="4" ry="4" width="17%" height="8" />

      <Rect x="53%" y="75" rx="20" ry="20" width="43%" height="130" />
      <Rect x="55%" y="215" rx="4" ry="4" width="37%" height="13" />
      <Rect x="55%" y="237" rx="4" ry="4" width="33%" height="15" />
      <Rect x="55%" y="265" rx="4" ry="4" width="17%" height="8" />
      <Rect x="55%" y="280" rx="4" ry="4" width="17%" height="8" />

      <Rect x="3%" y="325" rx="20" ry="20" width="43%" height="130" />
      <Rect x="5%" y="465" rx="4" ry="4" width="40%" height="13" />
      <Rect x="5%" y="487" rx="4" ry="4" width="33%" height="15" />
      <Rect x="5%" y="515" rx="4" ry="4" width="17%" height="8" />
      <Rect x="5%" y="530" rx="4" ry="4" width="17%" height="8" />

      <Rect x="53%" y="325" rx="20" ry="20" width="43%" height="130" />
      <Rect x="55%" y="465" rx="4" ry="4" width="40%" height="13" />
      <Rect x="55%" y="487" rx="4" ry="4" width="33%" height="15" />
      <Rect x="55%" y="515" rx="4" ry="4" width="17%" height="8" />
      <Rect x="55%" y="530" rx="4" ry="4" width="17%" height="8" />

      <Rect x="3%" y="575" rx="20" ry="20" width="43%" height="130" />
      <Rect x="55%" y="575" rx="20" ry="20" width="43%" height="130" />
    </ContentLoader>
  );
}
