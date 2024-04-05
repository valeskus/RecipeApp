import { PersistentStorageManager } from '@managers/PersistentStorageManager';

export class RecipesCardTypeManager {
    static async setCardType(cardType:  'grid' | 'linear') {
        await PersistentStorageManager.set('recipeCardType', cardType);
    }

    static async getCardType() {

        const cardType = await PersistentStorageManager.get('recipeCardType');

        return cardType as 'grid' | 'linear';
    }

    static async initCardType() {
        const cardType = await this.getCardType() || 'grid';

        return cardType as  'grid' | 'linear';
    }
}
