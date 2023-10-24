import { useCallback } from 'react';

import { useLanguagesStore, useSetLanguage } from '@stores/languages';

export const useSettingButtonController = () => {
  const { language } = useLanguagesStore();

  const setLanguage = useSetLanguage();

  const onPressUA = useCallback(() => {
    setLanguage('ua');
  }, []);

  const onPressEN = useCallback(() => {
    setLanguage('en');
  }, []);

  return {
    onPressUA,
    onPressEN,
    language,
  };
};
