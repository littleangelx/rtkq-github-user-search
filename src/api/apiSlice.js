import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users" }),
  tagTypes: ["Search"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userName) => `/${userName}`,
      providesTags: ["Search"],
    }),
  }),
});

export const { useGetUserQuery } = apiSlice;
