import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5174/api/v1" }),
  reducerPath: "api",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admin",
    "Performance",
    "Dashboard",
  ],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `main/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: builder.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: builder.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: builder.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmin: builder.query({
      query: () => "control/admin",
      providesTags: ["Admin"],
    }),
    getUserPerformance: builder.query({
      query: (id) => `control/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: builder.query({
      query: () => "main/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
