/* eslint-disable react-hooks/rules-of-hooks */
import { configure } from 'mobx';
import { UserStore, useUserStore } from './user';

configure({
  enforceActions: 'never'
});

export class RootStore {
  user = new UserStore();

  constructor(props: null | undefined) {
    this.user = useUserStore(props);
  }
}

export * from './user';
