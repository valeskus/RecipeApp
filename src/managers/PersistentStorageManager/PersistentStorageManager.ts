import AsyncStorage from '@react-native-async-storage/async-storage';

export class PersistentStorageManager {
    static set(item: string, value: string) {

        AsyncStorage.setItem(item, value);

        return;
    }

    static get(item: string) {
        return AsyncStorage.getItem(item);
    }

    static remove(item: string) {
        AsyncStorage.removeItem(item);

        return;
    }

}
