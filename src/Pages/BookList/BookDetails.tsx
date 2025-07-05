// src/Pages/BookList/BookDetails.tsx

import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "@/redux/services/booksApi";
import { Card } from "@/components/ui/card";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id!);

  if (isLoading) return <p className="p-4">Loading book details...</p>;
  if (isError || !book) return <p className="text-red-500 p-4">Failed to load book.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="p-6">
        <div className="flex gap-4">
          <img
            src={book.bookImage || "https://via.placeholder.com/120x160?text=No+Image"}
            alt={book.title}
            className="w-32 h-48 object-cover rounded border"
          />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Copies:</strong> {book.copies}</p>
            <p><strong>Available:</strong> {book.available ? "✅ Yes" : "❌ No"}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookDetails;
