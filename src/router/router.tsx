
import MainLayout from "@/MainLayout/MainLayout"

import AddBookForm from "@/Pages/BookList/AddBookForm"
import BookDetails from "@/Pages/BookList/BookDetails"
import BookList from "@/Pages/BookList/BookList"
import EditBookPage from "@/Pages/BookList/EditBookPage"
import BorrowForm from "@/Pages/Borrow/BorrowForm"
import BorrowSummaryPage from "@/Pages/Borrow/BorrowSummaryPage"
import Home from "@/Pages/Home/Home"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <MainLayout />,  // layout component here
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/books",
        element: <BookList />
      },
      {
        path: "/create-book",
        element: <AddBookForm />
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummaryPage />
      },
      {
        path: "/borrow/:id",
        element: <BorrowForm />
      },
      {
        path: "/edit-book/:id",
        element: <EditBookPage  />
      },
      {
  path: "/books/:id",
  element: <BookDetails />,
},
    ]
  }
])

export default router
