import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-kappa-eight.vercel.app",
  }),
  tagTypes: ["Book", "Borrow"],
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (query) =>
        `/books?filter=${query.filter}&skip=${query.skip}&limit=${query.limit}`,
      providesTags: ["Book"],
    }),
  }),
});

export const { useGetBookQuery } = baseApi;
