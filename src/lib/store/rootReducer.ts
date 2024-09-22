import { combineReducers } from '@reduxjs/toolkit';

import { revivaApi } from '@/features/core/api/store/api';

const rootReducer = combineReducers({
  [revivaApi.reducerPath]: revivaApi.reducer,
});

export default rootReducer;
