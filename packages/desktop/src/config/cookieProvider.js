import Cookies from "universal-cookie";

class Storage {
  constructor() {
    this.cookie = new Cookies();
  }
  get = key => Promise.resolve().then(() => this.cookie.get(key));
  set = (key, value) =>
    Promise.resolve().then(() => this.cookie.set(key, value));
  remove = key => Promise.resolve().then(() => this.cookie.remove(key));
}

let instance = null;
export default function getApi() {
  if (!instance) {
    instance = new Storage();
  }
  return instance;
}
