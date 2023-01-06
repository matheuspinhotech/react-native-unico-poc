import {NativeEventEmitter, NativeModules} from 'react-native';

export type UnicoImage = {
  base64: string;
  jwt: string;
};

export enum UnicoErrorTypes {
  NO_PERMISSION = 'NO_PERMISSION',
}

const {UnicoCheckModule} = NativeModules;
const eventEmitter = new NativeEventEmitter(UnicoCheckModule);

export const UnicoModule = {
  takePicture: async (): Promise<UnicoImage> => {
    return new Promise(async (resolve, reject) => {
      eventEmitter.addListener('onSuccess', (e): void => {
        eventEmitter.removeAllListeners('onSuccess');
        eventEmitter.removeAllListeners('onError');

        resolve({base64: e.base64, jwt: e.encrypted});
      });

      eventEmitter.addListener('onError', (e): void => {
        eventEmitter.removeAllListeners('onSuccess');
        eventEmitter.removeAllListeners('onError');

        reject(e);
      });

      return UnicoCheckModule.callLivenessCamera();
    });
  },
};
