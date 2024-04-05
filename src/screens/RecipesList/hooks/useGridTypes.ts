import * as RecipesStore from '@stores/recipes';
import { useSetCardType } from '@stores/recipes/hooks/useSetCardType';

import { EventService } from '@services/EventService';

export const useGridTypes = () => {

  const setCardType = useSetCardType();
  const { cardType } = RecipesStore.useRecipesStore();

  const addCardType = (type: 'grid' | 'linear') => {

    setCardType(type);

    EventService.emit('action:change-card-type', type);
  };

  return { addCardType, cardType };
};
