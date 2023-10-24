
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useSetLanguage } from '@stores/languages';
import * as LanguagesStore from '@stores/languages';

import { LanguageManager } from '@managers/LanguageManager';

export function LanguageController() {
  const setLanguage = useSetLanguage();
  const { language } = LanguagesStore.useLanguagesStore();
  const { i18n } = useTranslation();

  const getLanguage = useCallback(async () => {
    const languageFromStorage = await LanguageManager.getLanguage();
    if (!languageFromStorage) {
      i18n.changeLanguage('en');

      return setLanguage('en');
    }

    setLanguage(languageFromStorage);
    i18n.changeLanguage(languageFromStorage);
  }, []);

  useEffect(() => {
    getLanguage();
  }, []);

  useEffect(() => {
    LanguageManager.setLanguage(language);
  }, [language]);

  return (null);
}
