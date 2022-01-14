import { useMemo } from 'react';

import { action, makeAutoObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';

import { UserType } from 'types';
import { isClientEnv } from 'utill';

enableStaticRendering(typeof window === 'undefined');

let store: SearchStore;

const initUser = {
  userId: '',
  name: '',
  rank: '',
  birthDay: ''
};

export class UserStore {
  userData: UserType = initUser;

  constructor() {
    makeAutoObservable(this);
  }

  login = () => {
    this.userData = {
      userId: '61ca9e88e37d3d4621111940',
      name: '백승일',
      rank: 'owner',
      birthDay: '10/12'
    };
  };

  logout = () => {
    this.userData = {};
  };

  hydrate = (userData: UserType | null) => {
    if (!data) return;

    this.userData = userData;
  };
}

const initUserStore = (initData = null) => {
  const userStore = store ?? new UserStore();

  if (!isClientEnv()) {
    return userStore;
  }

  if (!store) {
    store = userStore;
    return store;
  }

  return store;
};

export const useUserStore = (initData: null | undefined) => {
  const store = useMemo(() => initUserStore(initData), [initData]);

  return store;
};
