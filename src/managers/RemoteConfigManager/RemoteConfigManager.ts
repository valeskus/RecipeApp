
import remoteConfig from '@react-native-firebase/remote-config';

export class RemoteConfigManager {
    static get(value: string): string {
        const valueData = remoteConfig().getValue(value).asString();

        return valueData;
    }
}
