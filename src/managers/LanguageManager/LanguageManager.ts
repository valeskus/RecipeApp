import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';

import { changeLanguage } from '@api/client.api';

export class LanguageManager {
   static async setLanguage(language: 'ua' | 'en') {
      changeLanguage(language);

      await AsyncStorage.setItem('language', language);
      i18n.changeLanguage(language);
   }

   static async getLanguage() {
      const language = await AsyncStorage.getItem('language');

      return language as 'en' | 'ua';
   }

   static async initLanguage() {
      const language = await this.getLanguage() || 'en';

      changeLanguage(language);
      i18n.changeLanguage(language);
   }
}
