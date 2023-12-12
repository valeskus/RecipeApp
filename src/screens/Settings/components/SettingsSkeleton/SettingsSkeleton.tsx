import React from 'react';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';

import { Colors } from '@UI/Colors';

export function SettingsSkeleton(): JSX.Element {
    return (
      <ContentLoader
        width={'100%'}
        height={'100%'}
        backgroundColor={Colors.secondary}
        opacity={0.2}
      >
        <Rect x="2%" y="15" rx="10" ry="10" width="43%" height="30" />

        <Circle cx="10%" cy="90" r="28" />
        <Circle cx="10%" cy="165" r="28" />
      </ContentLoader >
    );
}
