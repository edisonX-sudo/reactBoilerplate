const delay = async function() {
  return new Promise(resolve => setTimeout(resolve, 2000));
};

export default {
  namespace: 'base',
  state: {
    a: 0,
  },
  reducers: {
    setA(state, { payload: { a } }) {
      return { ...state, a };
    },
  },
  effects: {
    * calA({ payload: { diff } }, { put, call, select }) {
      yield call(delay);
      let oriA = yield select(states => states.base.a);
      let aWithDiff = oriA + diff;
      console.log(oriA, diff, aWithDiff);
      yield put({ type: 'setA', payload: { a:aWithDiff } });
    },
  },
  subscriptions: {},
};
