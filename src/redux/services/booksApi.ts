// src/redux/services/booksApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book } from "../types";
// or wherever your Book type lives

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-ivory.vercel.app/api",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "/books",
      transformResponse: (response: { data: Book[] }) => response.data,
      providesTags: ["Books"],
    }),
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    getBookById: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: { data: Book }) => response.data,
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<Book, { id: string; body: Partial<Book> }>({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBookByIdQuery,
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = booksApi;
