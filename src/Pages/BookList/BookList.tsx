import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/redux/services/booksApi";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Link } from "react-router-dom"; 
import { toast } from "react-toastify";


const BookList = () => {
  const { data: books, isLoading, error } = useGetBooksQuery();

  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id).unwrap();
        toast.success("Book deleted successfully!");
      } catch  {
        // More specific error handling
        toast.error("Failed to delete book. Please try again.");
      }
    }
  };

  if (isLoading) return <p>Loading books...</p>;
  if (error) return <p>Error loading books. Please try again later.</p>; // Handle initial fetch error

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4"> {/* Adjusted for better alignment */}
        <h2 className="text-2xl font-bold">📚 Book Management</h2> {/* Increased heading size */}
        <Link to={"/create-book"}>
          <Button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Add New Book</Button> {/* Used Button component */}
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Available</TableHead>
            <TableHead className="text-center">Actions</TableHead> {/* Centered actions header */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.map((book) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">{book.title}</TableCell> {/* Made title a bit bolder */}
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>{book.available ? "✅" : "❌"}</TableCell>
              <TableCell className="flex gap-2 justify-center"> {/* Aligned buttons */}

                <Link to={`/edit-book/${book._id}`}>
                  <Button variant="outline" size="sm">Edit</Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </Button>
                <Link to={`/borrow/${book._id}`}>
                  <Button variant="outline" size="sm">Borrow</Button>
                </Link>
                <Link to={`/books/${book._id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {books?.length === 0 && (
        <p className="text-center mt-4 text-gray-500">No books found. Add a new book to get started!</p>
      )}
    </div>
  );
};
export default BookList;