import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';
import {Colors} from '../../../../UI/Colors';

export function RecipeListSkeleton(): JSX.Element {
  return (
    <ContentLoader
      viewBox="0 0 300 595"
      backgroundColor={Colors.secondary}
      opacity={0.2}>
      <Circle cx="28" cy="21" r="21" />
      <Circle cx="80" cy="21" r="21" />
      <Circle cx="275" cy="21" r="21" />

      <Rect x="10" y="55" rx="20" ry="20" width="45%" height="105" />
      <Rect x="17" y="170" rx="4" ry="4" width="40%" height="13" />
      <Rect x="17" y="187" rx="4" ry="4" width="33%" height="15" />
      <Rect x="17" y="205" rx="4" ry="4" width="17%" height="8" />
      <Rect x="17" y="217" rx="4" ry="4" width="17%" height="8" />
      <Rect x="158" y="55" rx="20" ry="20" width="45%" height="105" />
      <Rect x="165" y="170" rx="4" ry="4" width="40%" height="13" />
      <Rect x="165" y="187" rx="4" ry="4" width="33%" height="15" />
      <Rect x="165" y="205" rx="4" ry="4" width="17%" height="8" />
      <Rect x="165" y="217" rx="4" ry="4" width="17%" height="8" />

      <Rect x="10" y="255" rx="20" ry="20" width="45%" height="105" />
      <Rect x="17" y="370" rx="4" ry="4" width="40%" height="13" />
      <Rect x="17" y="387" rx="4" ry="4" width="33%" height="15" />
      <Rect x="17" y="405" rx="4" ry="4" width="17%" height="8" />
      <Rect x="17" y="417" rx="4" ry="4" width="17%" height="8" />
      <Rect x="158" y="255" rx="20" ry="20" width="45%" height="105" />
      <Rect x="165" y="370" rx="4" ry="4" width="40%" height="13" />
      <Rect x="165" y="387" rx="4" ry="4" width="33%" height="15" />
      <Rect x="165" y="405" rx="4" ry="4" width="17%" height="8" />
      <Rect x="165" y="417" rx="4" ry="4" width="17%" height="8" />

      <Rect x="10" y="455" rx="20" ry="20" width="45%" height="105" />
      <Rect x="158" y="455" rx="20" ry="20" width="45%" height="105" />
    </ContentLoader>
  );
}
