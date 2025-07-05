import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const featuredBook = {
  title: "The Man in the Glass House",
  author: "George Stewart",
  description:
    "Philip Johnson, Architect of the Modern Century. Vividly crafted portrait of a landmark architect and his influence on modern design.",
  price: "$14.99",
  coverImage:
    "https://covers.openlibrary.org/b/id/10523338-L.jpg",
};

const authors = [
  {
    name: "Harold Stevens",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Simon Lawder",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Amy Whitehall",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Julia John",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
];

const FeaturedBookAndAuthors = () => {
  return (
    <div className="w-full">
      {/* Featured Book Section */}
      <section className="bg-[#f3e7d3] py-16 flex flex-col items-center justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 px-4">
          <img
            src={featuredBook.coverImage}
            alt={featuredBook.title}
            className="w-56 h-80 object-cover rounded shadow-lg mb-6 md:mb-0"
          />
          <div className="flex-1 text-center md:text-left">
            <div className="text-sm text-[#b97a56] font-semibold mb-2">{featuredBook.author}</div>
            <h2 className="text-3xl font-bold mb-2 leading-tight">{featuredBook.title}</h2>
            <p className="text-gray-700 text-base mb-6 max-w-md mx-auto md:mx-0">{featuredBook.description}</p>
            <div className="text-lg font-semibold text-[#b97a56] mb-4">Price: {featuredBook.price}</div>
            <Button className="bg-[#2d3a4a] text-white hover:bg-[#b97a56]">Read More</Button>
          </div>
        </div>
      </section>

      {/* Noted Authors Section */}
      <section className="bg-[#6c7a89] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="text-white text-xl font-bold mb-4 md:mb-0">Noted Authors</h3>
            <Link to="/authors" className="text-white underline text-sm">Full Authors List</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {authors.map((author) => (
              <div key={author.name} className="flex flex-col items-center">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white mb-2 shadow"
                />
                <div className="text-white font-medium text-base text-center">{author.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-[#5eb1ad] py-10">
        <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white font-bold text-lg mb-4 md:mb-0">
            Don't miss news from Grand Central Publishing
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Email *"
              className="rounded px-3 py-2 w-full md:w-64 bg-amber-50"
              required
            />
            <Button type="submit" className="bg-[#2d3a4a] text-white hover:bg-[#b97a56]">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBookAndAuthors; 