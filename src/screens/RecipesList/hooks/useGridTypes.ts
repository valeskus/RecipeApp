import { useEffect, useState } from 'react';

import { PersistentStorageManager } from '@managers/PersistentStorageManager';

import { EventService } from '@services/EventService';

export const useGridTypes = () => {
  const [recipeCardType, setRecipeCardType] = useState<'grid' | 'linear'>('grid');

  const setCardType = async (type: 'grid' | 'linear') => {
    await PersistentStorageManager.set('recipeCardType', type);
    setRecipeCardType(type);

    EventService.emit('action:change-card-type', type);
  };

  const getCardType = async () => {
    const cardType = await PersistentStorageManager.get('recipeCardType');
    if (!cardType) {
      return;
    }

    setRecipeCardType(cardType as 'grid' | 'linear');
  };

  useEffect(() => {
    getCardType();
  }, []);

  return { setCardType, recipeCardType, getCardType };
};
