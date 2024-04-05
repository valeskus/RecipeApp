import { PersistentStorageManager } from '@managers/PersistentStorageManager';

export class RecipesCardTypeManager {
    static async setType(cardType: 'grid' | 'line') {
        await PersistentStorageManager.set('recipeCardType', cardType);
    }

    static async getCardType() {

        const cardType = await PersistentStorageManager.get('recipeCardType');

        return cardType as 'grid' | 'line';
    }

    static async initCardType() {
        const cardType = await this.getCardType() || 'grid';

        return cardType;
    }
}
