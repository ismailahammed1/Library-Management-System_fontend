import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Borrow } from "../types";

interface BorrowApiResponse {
  success: boolean;
  message: string;
  data: Borrow[];
}

interface BorrowRequest {
  book: string;
  quantity: number;
  dueDate: string;
}

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Books", "Borrows"],
  endpoints: (builder) => ({
    getBorrowedBooks: builder.query<BorrowApiResponse, void>({
      query: () => "/borrow",
      providesTags: ["Borrows"],
    }),
    borrowBook: builder.mutation<Borrow, BorrowRequest>({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Borrows", "Books"],
    }),
  }),
});

export const { useGetBorrowedBooksQuery, useBorrowBookMutation } = borrowApi;
