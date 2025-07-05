import { useGetBorrowedBooksQuery } from "@/redux/services/borrowApi";
import { Card } from "@/components/ui/card";
import type { Borrow } from "@/redux/types";

const BorrowersList = () => {
const { data, isLoading, isError } = useGetBorrowedBooksQuery();
const borrows: Borrow[] = data?.data ?? [];

  if (isLoading) {
    return (
      <section className="py-12 text-center">
        <p className="text-gray-500 text-lg">Loading borrowed books...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-12 text-center">
        <p className="text-red-500 text-lg">❌ Failed to load borrowed books.</p>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">📚 Recent Borrows</h2>

        {borrows.length === 0 ? (
          <p className="text-gray-500">No books have been borrowed yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {borrows.slice(0, 4).map((borrow, idx) => (
              
           <Card
  key={borrow._id || idx}
  className="flex items-center gap-4 p-4 shadow-sm border"
>
  <div className="w-20 h-28 flex-shrink-0">
    <img
      src={
        borrow.book?.bookImage
          ? borrow.book.bookImage
          : "https://via.placeholder.com/80x112?text=No+Image"
      }
      alt={borrow.book?.title || "Book Cover"}
      className="w-full h-full object-cover rounded border"
    />
  </div>
  <div className="flex-1">
    <div className="font-semibold text-base mb-1">
      {borrow.book?.title ?? "Untitled Book"}
    </div>
    <div className="text-xs text-gray-600 mb-1">
      <strong>Quantity:</strong> {borrow.quantity ?? "N/A"}
    </div>
    <div className="text-xs text-gray-600">
      <strong>Due Date:</strong>{" "}
      {borrow.dueDate
        ? new Date(borrow.dueDate).toLocaleDateString()
        : "Unknown"}
    </div>
  </div>
</Card>

            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BorrowersList;
