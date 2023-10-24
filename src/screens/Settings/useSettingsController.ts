import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useLanguagesStore, useSetLanguage } from '@stores/languages';

export const useSettingButtonController = () => {
  const { language } = useLanguagesStore();
  const { t, i18n } = useTranslation();

  const setLanguage = useSetLanguage();

  const onPressUA = useCallback(() => {
    setLanguage('ua');
    i18n.changeLanguage('ua');

  }, []);

  const onPressEN = useCallback(() => {
    setLanguage('en');
    i18n.changeLanguage('en');
  }, []);

  return {
    onPressUA,
    onPressEN,
    language,
    t,
  };
};
