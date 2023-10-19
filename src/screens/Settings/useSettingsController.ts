import { useCallback, useState } from 'react';

import * as CategoriesStore from '@stores/categories';

import { changeLanguage } from '@api/client.api';

export const useSettingButtonController = () => {
  const [isUA, setUA] = useState(true);
  const getCategories = CategoriesStore.useGetCategories();

  const onPressUA = useCallback(async() => {
    setUA(true);
    changeLanguage('ua');
    await getCategories();

  }, []);
  const onPressEN = useCallback(async() => {
    setUA(false);
    changeLanguage('en');
    await getCategories();

  }, []);

  return {
    onPressUA,
    onPressEN,
    isUA,
  };
};
