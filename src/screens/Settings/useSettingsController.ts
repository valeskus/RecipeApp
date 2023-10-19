import { useCallback, useEffect, useState } from 'react';

import * as CategoriesStore from '@stores/categories';
import { useLanguagesStore, useSetLanguage } from '@stores/languages';

export const useSettingButtonController = () => {
  const [isUA, setUA] = useState<boolean | undefined>();
  const getCategories = CategoriesStore.useGetCategories();
  const { language } = useLanguagesStore();

  const setLanguage = useSetLanguage();

  useEffect(() => {
    if (language === 'en') {
      return setUA(false);
    }

    setUA(true);
  }, [language]);

  const onPressUA = useCallback(async () => {
    setUA(true);
    setLanguage('ua');
    await getCategories();

  }, []);
  const onPressEN = useCallback(async () => {
    setUA(false);
    setLanguage('en');
    await getCategories();

  }, []);

  return {
    onPressUA,
    onPressEN,
    isUA,
  };
};
