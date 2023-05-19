import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Colors} from '../../../../../UI/Colors';

export function CategoryListSkeleton(): JSX.Element {
  return (
    <ContentLoader
      viewBox="0 0 300 590"
      backgroundColor={Colors.secondary}
      opacity={0.2}>
      <Rect x="10" y="1" rx="20" ry="20" width="135" height="105" />
      <Rect x="10" y="120" rx="4" ry="4" width="135" height="13" />
      <Rect x="160" y="1" rx="20" ry="20" width="135" height="105" />
      <Rect x="160" y="120" rx="4" ry="4" width="135" height="13" />

      <Rect x="10" y="150" rx="20" ry="20" width="135" height="105" />
      <Rect x="10" y="270" rx="4" ry="4" width="135" height="13" />
      <Rect x="160" y="150" rx="20" ry="20" width="135" height="105" />
      <Rect x="160" y="270" rx="4" ry="4" width="135" height="13" />

      <Rect x="10" y="300" rx="20" ry="20" width="135" height="105" />
      <Rect x="10" y="420" rx="4" ry="4" width="135" height="13" />
      <Rect x="160" y="300" rx="20" ry="20" width="135" height="105" />
      <Rect x="160" y="420" rx="4" ry="4" width="135" height="13" />
    </ContentLoader>
  );
}
