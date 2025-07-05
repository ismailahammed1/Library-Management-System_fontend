import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetBorrowedBooksQuery } from '@/redux/services/borrowApi';
import type { Borrow } from '@/redux/types';

const BorrowSummaryPage = () => {
  const { data, isLoading, isError } = useGetBorrowedBooksQuery();
  const borrows: Borrow[] = Array.isArray(data) ? data : data?.data ?? [];

  if (isLoading) {
    return (
      <div className="p-6">
        <Skeleton className="h-6 w-1/3 mb-4" />
        <Skeleton className="h-24 w-full mb-4" />
        <Skeleton className="h-24 w-full mb-4" />
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 p-6">❌ Failed to load borrowed books.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📚 Borrow Summary</h1>

      {borrows.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {borrows.map((borrow, index) => (
            <Card key={index} className="flex items-center gap-4 p-4 shadow-md border bg-white">
              <div className="w-20 h-28 flex-shrink-0">
                <img
                  src={
                    borrow.book?.bookImage ||
                    (borrow.book?.isbn ? `https://covers.openlibrary.org/b/isbn/${borrow.book.isbn}-L.jpg` : "https://via.placeholder.com/80x112?text=No+Image")
                  }
                  alt={borrow.book?.title || "Book Cover"}
                  className="w-full h-full object-cover rounded border"
                />
              </div>
              <CardContent className="flex-1 space-y-2 p-0">
                <div className="font-semibold text-base mb-1">{borrow.book.title}</div>
                <div className="text-xs text-gray-600 mb-1"><strong>ISBN:</strong> {borrow.book.isbn}</div>
                <div className="text-xs text-gray-600"><strong>Total Borrowed:</strong> {borrow.quantity}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>No books have been borrowed yet.</div>
      )}
    </div>
  );
};

export default BorrowSummaryPage;
