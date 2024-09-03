import { useSetCardType } from '@stores/recipes/hooks/useSetCardType';

import { EventService } from '@services/EventService';

export const useGridTypes = () => {

  const setCardType = useSetCardType();

  const changeCardType = (type: 'grid' | 'linear') => {

    setCardType(type);

    EventService.emit('action:change-card-type', type);
  };

  return { changeCardType };
};
