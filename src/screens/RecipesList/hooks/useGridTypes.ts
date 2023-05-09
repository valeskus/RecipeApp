import {useCallback, useState} from 'react';

export const useGridTypes = () => {
  const [gridType, setGridType] = useState(true);

  const onChangeCardType = useCallback((type: boolean) => {
    return setGridType(type);
  }, []);

  return {gridType, onChangeCardType};
};
