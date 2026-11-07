

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientService = createApi({
    reducerPath: "clientService",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://admin.wemark.pro/api",
    }),

    endpoints: (builder) => ({
        getHomePage: builder.query({
            query: () => "/tasks-xschool",
        }),
    })
});

export const {
    useGetHomePageQuery
} = clientService;