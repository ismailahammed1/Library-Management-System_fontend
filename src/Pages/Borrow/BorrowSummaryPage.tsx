import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetBorrowedBooksQuery } from '@/redux/services/borrowApi';
import type { Borrow } from '@/redux/types';

const BorrowSummaryPage = () => {
const { data, isLoading, isError } = useGetBorrowedBooksQuery();
const borrows: Borrow[] = data?.data ?? [];

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
        <div className="space-y-4">
          {borrows.map((borrow, index) => (
            <Card key={index}>
              <CardContent className="p-4 space-y-2">
                <div><strong>📖 Title:</strong> {borrow.book.title}</div>
                <div><strong>🔢 ISBN:</strong> {borrow.book.isbn}</div>
                <div><strong>📦 Total Borrowed:</strong> {borrow.quantity}</div>
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
