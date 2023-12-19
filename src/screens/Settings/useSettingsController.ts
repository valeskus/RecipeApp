import { useCallback, useEffect, useState } from 'react';

import { LanguageManager } from '@managers/LanguageManager';

import { EventService } from '@services/EventService';

export const useSettingButtonController = () => {
  const [language, setLanguage] = useState<'ua' | 'en'>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onPressUA = useCallback(async () => {
    setLoading(true);
    setLanguage('ua');
    await LanguageManager.setLanguage('ua');
    setLoading(false);
    LanguageManager.setLanguage('ua');

    EventService.emit('action:change-language', 'ua');
  }, []);

  const onPressEN = useCallback(async () => {
    setLoading(true);
    setLanguage('en');
    await LanguageManager.setLanguage('en');
    setLoading(false);
    LanguageManager.setLanguage('en');

    EventService.emit('action:change-language', 'en');
  }, []);

  const initLanguage = useCallback(async () => {
    const currentLanguage = await LanguageManager.getLanguage();
    setLanguage(currentLanguage);
  }, []);

  useEffect(() => {
    initLanguage();
  }, []);

  useEffect(() => {
    EventService.emit('view:settings');
  }, []);

  return {
    onPressUA,
    onPressEN,
    language,
    isLoading,
  };
};
