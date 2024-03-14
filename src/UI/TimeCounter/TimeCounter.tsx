import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';

import { Icons } from '@UI/Icons';

import { TimeManager } from '@managers/TimeManager';

import { styles } from './styles';

interface Props {
  time: number;
}

export function TimeCounter({ time }: Props): JSX.Element {

  const formatTime = useMemo(() => {
    return TimeManager.getFormattedTime(time);
  }, [time]);
  const { t } = useTranslation();

  return (
    <View style={styles.timeContainerContainer}>
      <View style={styles.timeContainer}>
        <FastImage style={styles.timeIcon} source={Icons.time} />

        {!!formatTime.hours && (<>
          <Text style={styles.time}>{formatTime.hours}</Text>
          <Text style={styles.time}>{t('units.h')} </Text>
        </>)}
        {!!formatTime.minutes && (<>
          <Text style={styles.time}>{formatTime.minutes}</Text>
          <Text style={styles.time}>{t('units.min')}</Text>
        </>)}
      </View>
    </View>
  );
}
