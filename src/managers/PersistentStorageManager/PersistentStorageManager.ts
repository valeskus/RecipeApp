import AsyncStorage from '@react-native-async-storage/async-storage';

export class PersistentStorageManager {
    static async set(item: string, value: string) {

        await AsyncStorage.setItem(item, value);

        return;
    }

    static async get(item: string) {
        const value = await AsyncStorage.getItem(item);

        return value;
    }

    static remove(item: string) {
        AsyncStorage.removeItem(item);

        return;
    }

}
