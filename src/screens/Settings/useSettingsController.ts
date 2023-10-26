import { useCallback, useEffect, useState } from 'react';

import { LanguageManager } from '@managers/LanguageManager';

export const useSettingButtonController = () => {
  const [language, setLanguage] = useState<'ua' | 'en'>();

  const onPressUA = useCallback(() => {
    setLanguage('ua');
    LanguageManager.setLanguage('ua');
  }, []);

  const onPressEN = useCallback(() => {
    setLanguage('en');
    LanguageManager.setLanguage('en');
  }, []);

  const initLanguage = useCallback(async() => {
    const currentLanguage = await LanguageManager.getLanguage();
    setLanguage(currentLanguage);
  }, []);

  useEffect(() => {
    initLanguage();
  }, []);

  return {
    onPressUA,
    onPressEN,
    language,
  };
};
