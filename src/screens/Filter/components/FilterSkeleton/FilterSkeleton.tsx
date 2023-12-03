import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { Colors } from '@UI/Colors';

export function FilterSkeleton(): JSX.Element {
  return (
    <ContentLoader
      width={'100%'}
      height={'100%'}
      backgroundColor={Colors.secondary}
      opacity={0.2}
    >
      <Rect x="2%" y="10" rx="10" ry="10" width="43%" height="30" />

      <Rect x="2%" y="50" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="50" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="105" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="105" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="160" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="160" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="215" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="216" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="270" rx="10" ry="10" width="43%" height="30" />

      <Rect x="2%" y="309" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="310" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="365" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="366" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="420" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="421" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="477" rx="10" ry="10" width="43%" height="30" />

      <Rect x="2%" y="515" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="516" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="570" rx="10" ry="10" width="35" height="35" />
      <Rect x="15%" y="571" rx="10" ry="10" width="60%" height="33" />

      <Rect x="2%" y="635" rx="10" ry="10" width="43%" height="30" />

    </ContentLoader>
  );
}
