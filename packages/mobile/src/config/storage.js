import {AsyncStorage} from 'react-native';

class Storage {
  get = key => AsyncStorage.getItem(key);
  set = (key, value) => AsyncStorage.setItem(key, value);
  remove = key => AsyncStorage.removeItem(key);
}

let instance = null;
export default function getApi() {
  if (!instance) {
    instance = new Storage();
  }
  return instance;
}
