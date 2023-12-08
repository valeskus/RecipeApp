import React from 'react';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';

import { Colors } from '@UI/Colors';

export function LinearListSkeleton(): JSX.Element {
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

        <Rect x="3%" y="75" rx="20" ry="20" width="45%" height="125" />
        <Rect x="53%" y="85" rx="4" ry="4" width="42%" height="25" />
        <Rect x="53%" y="145" rx="4" ry="4" width="33%" height="15" />
        <Rect x="53%" y="175" rx="4" ry="4" width="17%" height="15" />

        <Rect x="3%" y="220" rx="20" ry="20" width="45%" height="130" />
        <Rect x="53%" y="230" rx="4" ry="4" width="42%" height="25" />
        <Rect x="53%" y="290" rx="4" ry="4" width="33%" height="15" />
        <Rect x="53%" y="320" rx="4" ry="4" width="17%" height="15" />

        <Rect x="3%" y="365" rx="20" ry="20" width="45%" height="130" />
        <Rect x="53%" y="375" rx="4" ry="4" width="42%" height="25" />
        <Rect x="53%" y="435" rx="4" ry="4" width="33%" height="15" />
        <Rect x="53%" y="465" rx="4" ry="4" width="17%" height="15" />

        <Rect x="3%" y="510" rx="20" ry="20" width="45%" height="130" />
        <Rect x="53%" y="520" rx="4" ry="4" width="42%" height="25" />
        <Rect x="53%" y="580" rx="4" ry="4" width="33%" height="15" />
        <Rect x="53%" y="610" rx="4" ry="4" width="17%" height="15" />
      </ContentLoader>
    );
}
