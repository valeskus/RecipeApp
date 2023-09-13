import { useCallback, useState } from 'react';

export const useGridTypes = () => {
  const [gridType, setGridType] = useState<'grid' | 'linear'>('grid');

  const onChangeCardType = useCallback((type: 'grid' | 'linear') => {
    return setGridType(type);
  }, []);

  return { gridType, onChangeCardType };
};
