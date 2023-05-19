import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';
import {Colors} from '../../../../UI/Colors';

export function RecipeDetailsSkeleton(): JSX.Element {
  return (
    <ContentLoader
      viewBox="0 0 300 650"
      backgroundColor={Colors.secondary}
      opacity={0.2}>
      <Rect x="0" y="1" rx="20" ry="20" width="100%" height="100%" />
      <Circle cx={25} cy={65} r={20} />
      <Circle cx={275} cy={65} r={20} />

      <Rect x="-50" y="245" rx="60" ry="60" width="116%" height="100%" />
      <Rect x="10" y="270" rx="4" ry="4" width="150" height="20" />
      <Rect x="215" y="272" rx="4" ry="4" width="50" height="15" />
      <Rect x="10" y="310" rx="4" ry="4" width="90%" height="8" />
      <Rect x="10" y="325" rx="4" ry="4" width="85%" height="8" />
      <Rect x="10" y="340" rx="4" ry="4" width="80%" height="8" />
      <Circle cx={35} cy={398} r={18} />
      <Rect x="60" y="394" rx="4" ry="4" width="65" height="10" />
      <Circle cx={175} cy={398} r={18} />
      <Rect x="200" y="394" rx="4" ry="4" width="70" height="10" />
      <Circle cx={35} cy={440} r={18} />
      <Rect x="60" y="436" rx="4" ry="4" width="70" height="10" />
      <Circle cx={175} cy={440} r={18} />
      <Rect x="200" y="436" rx="4" ry="4" width="65" height="10" />
      <Rect x="10" y="475" rx="12" ry="12" width="93%" height="33" />
      <Circle cx={25} cy={530} r={5} />
      <Rect x="50" y="523" rx="4" ry="4" width="45%" height="15" />
      <Rect x="240" y="523" rx="4" ry="4" width="50" height="15" />
      <Circle cx={25} cy={575} r={5} />
      <Rect x="50" y="568" rx="4" ry="4" width="45%" height="15" />
      <Rect x="240" y="568" rx="4" ry="4" width="50" height="15" />
      <Circle cx={25} cy={620} r={5} />
      <Rect x="50" y="613" rx="4" ry="4" width="45%" height="15" />
      <Rect x="240" y="613" rx="4" ry="4" width="50" height="15" />
    </ContentLoader>
  );
}
