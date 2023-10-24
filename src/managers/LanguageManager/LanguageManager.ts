import AsyncStorage from '@react-native-async-storage/async-storage';

export class LanguageManager {

    static async setLanguage(language: 'ua' | 'en') {
       await AsyncStorage.setItem('language', language);
    }

    static async getLanguage() {
      const language =  await AsyncStorage.getItem('language');

      return language as 'en'|'ua';
    }
}
