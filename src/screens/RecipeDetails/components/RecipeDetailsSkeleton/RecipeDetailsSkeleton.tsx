import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';
import {Colors} from '../../../../UI/Colors';

export function RecipeDetailsSkeleton(): JSX.Element {
  return (
    <ContentLoader
      backgroundColor={Colors.secondary}
      opacity={0.2}
      width={'100%'}
      height={'100%'}>
      <Rect x="0" y="1" rx="20" ry="20" width="100%" height="100%" />
      <Circle cx={'10%'} cy={84} r={25} />
      <Circle cx={'90%'} cy={84} r={25} />

      <Rect x="-16%" y="320" rx="60" ry="60" width="116%" height="100%" />
      <Rect x="3%" y="350" rx="4" ry="4" width="47%" height="25" />
      <Rect x="67%" y="357" rx="4" ry="4" width="15%" height="15" />
      <Rect x="3%" y="400" rx="4" ry="4" width="90%" height="8" />
      <Rect x="3%" y="420" rx="4" ry="4" width="85%" height="8" />
      <Rect x="3%" y="440" rx="4" ry="4" width="80%" height="8" />
      <Rect x="3%" y="460" rx="4" ry="4" width="75%" height="8" />

      <Circle cx={'12%'} cy={520} r={23} />
      <Rect x="20%" y="515" rx="4" ry="4" width="20%" height="10" />
      <Circle cx={'12%'} cy={575} r={23} />
      <Rect x="20%" y="570" rx="4" ry="4" width="22%" height="10" />
      <Circle cx={'58%'} cy={520} r={23} />
      <Rect x="66%" y="515" rx="4" ry="4" width="70" height="10" />
      <Circle cx={'58%'} cy={575} r={23} />
      <Rect x="66%" y="570" rx="4" ry="4" width="65" height="10" />
      <Rect x="3%" y="625" rx="12" ry="12" width="93%" height="40" />
      <Circle cx={'9%'} cy={695} r={5} />
      <Rect x="16%" y="688" rx="4" ry="4" width="45%" height="15" />
      <Rect x="75%" y="688" rx="4" ry="4" width="50" height="15" />
      <Circle cx={'9%'} cy={755} r={5} />
      <Rect x="16%" y="747" rx="4" ry="4" width="45%" height="15" />
      <Rect x="75%" y="747" rx="4" ry="4" width="50" height="15" />
      <Circle cx={'9%'} cy={806} r={5} />
      <Rect x="16%" y="800" rx="4" ry="4" width="45%" height="15" />
      <Rect x="75%" y="800" rx="4" ry="4" width="50" height="15" />
    </ContentLoader>
  );
}
