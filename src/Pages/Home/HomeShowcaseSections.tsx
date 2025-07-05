import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import BorrowersList from "../Borrow/BorrowersList";


const blogPosts = [
  {
    title: "Finissage of Books Like a Book exhibition",
    image: "https://img.freepik.com/free-vector/reading-book-concept-illustration_114360-8206.jpg",
  },
  {
    title: "10 Best Exciting Books for Children",
    image: "https://img.freepik.com/free-vector/children-reading-books-park_1308-30812.jpg",
  },
  {
    title: "Facts You Didn’t Know About Books",
    image: "https://img.freepik.com/free-vector/flat-people-reading-book-collection_23-2148897712.jpg",
  },
];

const topBooks = [
  {
    title: "20 books to Help You Raise a Child",
    color: "bg-green-200",
  },
  {
    title: "40 Books to Read Before You Turn 40",
    color: "bg-orange-200",
  },
  {
    title: "45 Books About Great Women",
    color: "bg-blue-200",
  },
  {
    title: "10 books to Help You Believe in Yourself",
    color: "bg-indigo-200",
  },
];

const HomeShowcaseSections = () => {
  
  return (
    <div className="w-full">
      {/* Browse Books by Genre (show 4 books) */}
      <BorrowersList/>

      {/* Latest from Printpress Blog */}
      <section className="py-12 bg-[#f8f8f6]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Latest from Printpress Blog</h2>
            <Link to="/blog" className="text-red-600 text-sm font-medium hover:underline">Fresh Collection</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-3" />
                <div className="font-semibold text-base text-center mb-1">{post.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our top books for 2019 */}
      <section className="py-12 bg-[#e6e7d8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Our top books for 2019</h2>
            <Link to="/top-books" className="text-red-600 text-sm font-medium hover:underline">Fresh Collection</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topBooks.map((book) => (
              <Card key={book.title} className={`flex flex-col items-center p-6 shadow-md hover:shadow-lg transition-shadow ${book.color}`}>
                <div className="font-semibold text-base text-center mb-2">{book.title}</div>
                <Button variant="outline" className="mt-auto">Read More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeShowcaseSections; 