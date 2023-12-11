import i18n from 'i18next';

import { changeLanguage } from '@api/client.api';

import { PersistentStorageManager } from '@managers/PersistentStorageManager';

export class LanguageManager {
   static async setLanguage(language: 'ua' | 'en') {
      changeLanguage(language);
      await PersistentStorageManager.set('language', language);
      i18n.changeLanguage(language);
   }

   static async getLanguage() {
      const language = await PersistentStorageManager.get('language');

      return language as 'en' | 'ua';
   }

   static async initLanguage() {
      const language = await this.getLanguage() || 'en';

      changeLanguage(language);
      i18n.changeLanguage(language);
   }
}
