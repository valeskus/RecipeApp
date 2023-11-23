import React from 'react';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';
import { StatusBar } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export function RecipeDetailsSkeleton(): JSX.Element {
  return (

    <ContentLoader
      backgroundColor={Colors.secondary}
      opacity={0.2}
      width={'100%'}
      height={'100%'}
    >
      <StatusBar backgroundColor="transparent" barStyle="dark-content"
        translucent={true}
      />
      <Rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
      <Circle cx={'9.5%'} cy={StatusBar.currentHeight ? StatusBar.currentHeight + 25 : normalize(60)} />

      <Rect x="-16%" y="320" rx="60" ry="60" width="116%" height="100%" />
      <Rect x="3%" y="370" rx="4" ry="4" width="47%" height="25" />
      <Rect x="70%" y="377" rx="4" ry="4" width="15%" height="15" />
      <Rect x="3%" y="420" rx="4" ry="4" width="90%" height="8" />
      <Rect x="3%" y="440" rx="4" ry="4" width="85%" height="8" />
      <Rect x="3%" y="460" rx="4" ry="4" width="80%" height="8" />
      <Rect x="3%" y="480" rx="4" ry="4" width="75%" height="8" />

      <Rect x="3%" y="505" rx="12" ry="12" width="93%" height="40" />

      <Circle cx={'12%'} cy={600} r={23} />
      <Rect x="20%" y="595" rx="4" ry="4" width="20%" height="10" />
      <Circle cx={'12%'} cy={655} r={23} />
      <Rect x="20%" y="650" rx="4" ry="4" width="22%" height="10" />
      <Circle cx={'58%'} cy={600} r={23} />
      <Rect x="66%" y="595" rx="4" ry="4" width="70" height="10" />
      <Circle cx={'58%'} cy={655} r={23} />
      <Rect x="66%" y="650" rx="4" ry="4" width="65" height="10" />
      <Rect x="3%" y="695" rx="12" ry="12" width="93%" height="40" />

      <Rect x="3%" y="755" rx="4" ry="4" width="47%" height="20" />
      <Rect x="3%" y="785" rx="4" ry="4" width="20%" height="15" />

      <Circle cx={'63%'} cy={762} r={13} />
      <Rect x="69%" y="757" rx="4" ry="4" width="7%" height="10" />
      <Circle cx={'82%'} cy={762} r={13} />

      <Circle cx={'9%'} cy={820} r={5} />
      <Rect x="16%" y="812" rx="4" ry="4" width="45%" height="15" />
      <Rect x="75%" y="812" rx="4" ry="4" width="50" height="15" />
    </ContentLoader>
  );
}
