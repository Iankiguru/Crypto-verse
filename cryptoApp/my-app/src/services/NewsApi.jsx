import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const crytpoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: crytpoNewsApiHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({count, newsCategory}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;











// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '420ea4950bmsh5f453ee27b8649cp119562jsn2c5ab4eede48',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };