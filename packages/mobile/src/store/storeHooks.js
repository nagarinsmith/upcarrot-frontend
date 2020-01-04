import React from 'react';
import {MobXProviderContext} from 'mobx-react';

// custom hook for injecting our store
export default function useStores() {
  return React.useContext(MobXProviderContext);
}
