// src/Pages/BookList/EditBookPage.tsx

import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/services/booksApi";
import type { Book } from "@/redux/types";
import { toast } from "react-toastify";

const EditBookPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading } = useGetBookByIdQuery(id!);
  const [updateBook] = useUpdateBookMutation();

  const [form, setForm] = useState<Book | null>(null);

  useEffect(() => {
    if (book) {
      setForm(book);
    }
  }, [book]);

  const handleSubmit = async () => {
    if (!form) return;
    const updatedBook = {
      ...form,
      available: form.copies === 0 ? false : form.available,
    };
    try {
      await updateBook({ id: form._id, body: updatedBook }).unwrap();
      toast.success("Book updated successfully!");
      navigate("/books");
    } catch {
      toast.error("Failed to update book.");
    }
  };

  if (isLoading || !form) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Edit Book</h2>
      <div className="space-y-3">
        <Input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />
        <Input
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          placeholder="Author"
        />
        <Input
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
          placeholder="Genre"
        />
        <Input
          value={form.isbn}
          onChange={(e) => setForm({ ...form, isbn: e.target.value })}
          placeholder="ISBN"
        />
        <Input
          type="number"
          value={form.copies}
          onChange={(e) =>
            setForm({ ...form, copies: Number(e.target.value) })
          }
          placeholder="Copies"
        />
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditBookPage;
