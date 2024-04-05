import * as RecipesStore from '@stores/recipes';
import { useSetCardType } from '@stores/recipes/hooks/useSetCardType';

import { RecipesCardTypeManager } from '@managers/RecipesCardTypeManager';

import { EventService } from '@services/EventService';

export const useGridTypes = () => {

  const setCardType = useSetCardType();
  const { cardType } = RecipesStore.useRecipesStore();

  const addCardType = async (type: 'grid' | 'linear') => {
    await RecipesCardTypeManager.setCardType(type);

    setCardType(type);

    EventService.emit('action:change-card-type', type);
  };

  return { addCardType, cardType };
};
