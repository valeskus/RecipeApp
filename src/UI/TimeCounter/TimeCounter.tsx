import React, { useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

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
      {formatTime.hours && (
        <View style={styles.timeContainer}>
          <Image style={styles.timeIcon} source={Icons.time} />

          <Text style={styles.time}>{formatTime.hours}</Text>
          <Text style={styles.time}>{t('units.h')} </Text>
          <Text style={styles.time}>{formatTime.minutes}</Text>
          <Text style={styles.time}>{t('units.min')}</Text>
        </View>)
      }
      {!formatTime.hours && (<View style={styles.timeContainer}>
        <Image style={styles.timeIcon} source={Icons.time} />

        <Text style={styles.time}>{formatTime.minutes}</Text>
        <Text style={styles.time}>{t('units.min')}</Text>
      </View>)
      }
    </View>
  );
}
