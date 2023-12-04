import { useCallback, useEffect, useState } from 'react';

import { LanguageManager } from '@managers/LanguageManager';

export const useSettingButtonController = () => {
  const [language, setLanguage] = useState<'ua' | 'en'>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onPressUA = useCallback(async () => {
    setLoading(true);
    setLanguage('ua');
    await LanguageManager.setLanguage('ua');
    setLoading(false);
  }, []);

  const onPressEN = useCallback(async () => {
    setLoading(true);
    setLanguage('en');
    await LanguageManager.setLanguage('en');
    setLoading(false);
  }, []);

  const initLanguage = useCallback(async () => {
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
    isLoading,
  };
};
