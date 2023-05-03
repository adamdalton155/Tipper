//This file is used to create the payments that would be sent to Stripe
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:3000/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Payments
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: 'payments/intents',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
 useCreatePaymentIntentMutation
} = apiSlice;