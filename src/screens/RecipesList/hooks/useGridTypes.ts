import {useCallback, useState} from 'react';

export const useGridTypes = () => {
  // TODO
  const [gridType, setGridType] = useState<'grid' | 'linear'>('grid');
  // const [gridType, setGridType] = useState(true);

  const onChangeCardType = useCallback((type: 'grid' | 'linear') => {
    return setGridType(type);
  }, []);

  return {gridType, onChangeCardType};
};
