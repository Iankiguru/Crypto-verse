import  {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cryptoApi } from '../services/API';
import { cryptoNewsApi } from '../services/NewsApi';

const store=  configureStore({
    reducer: {
        // Add your reducers here
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(cryptoApi.middleware)
        .concat(cryptoNewsApi.middleware),
   
    
});


setupListeners(store.dispatch);

export default store;