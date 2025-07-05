import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "@/redux/services/booksApi";
import type { Book } from "@/redux/types";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" as const } },
};


const HomeBookList = () => {
  const { data: books, isLoading } = useGetBooksQuery();
  const bookList: Book[] = Array.isArray(books) ? books : books ?? [];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Discover Your Next Book</h2>
          <Link to="/books" className="text-red-600 font-medium hover:underline">View All</Link>
        </div>
        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bookList.slice(0, 4).map((book, idx) => (
              <motion.div
                key={book._id || idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                className="w-full"
              >
                <Card className="flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-shadow bg-white">
                  <div className="relative w-40 h-56 mb-4">
                    <img
                      src={book.bookImage }
                      alt={book.title || "Book Cover"}
                      className="w-full h-full object-cover rounded border"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{book.author || "Unknown Author"}</div>
                  <div className="font-semibold h-10 text-base text-center mb-1">{book.title || "Untitled"}</div>
                  <div className="text-sm text-gray-700 mb-2">{book.genre || "Genre"}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBookList; 