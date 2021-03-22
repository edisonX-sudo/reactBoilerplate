import IpServiceApi from '../services/IpService';

const delay = async function() {
  return new Promise(resolve => setTimeout(resolve, 2000));
};

export default {
  namespace: 'root',
  state: {
    ip: '...',
  },
  reducers: {
    setIp(state, { payload: { ip } }) {
      return { ...state, ip };
    },
  },
  effects: {
    * fetchPhyPubIp({ payload }, { put, call, select }) {
      yield call(delay);
      let ip = yield call(IpServiceApi.fetchCurrentPhysicPublicIP);
      let oriIp = yield select(states => states.root.ip);
      console.log('curIp', ip, 'oriIp', oriIp);
      yield put({ type: 'setIp', payload: { ip: ip } });
    },
  },
  subscriptions: {},
};
