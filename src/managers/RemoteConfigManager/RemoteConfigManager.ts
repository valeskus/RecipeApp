
import remoteConfig from '@react-native-firebase/remote-config';

export class RemoteConfigManager {
    static get(value: string) {
        const valueData = remoteConfig().getValue(value);

        return valueData;
    }
}
