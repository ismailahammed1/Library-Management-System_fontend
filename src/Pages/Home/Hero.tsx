"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  coverImage: string;
  authorImage: string;
  description: string;
}

export const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const books: Book[] = [
    {
      id: 1,
      title: "Still Holding On",
      author: "Blaine Pearson",
      publisher: "Penguin Random House",
      coverImage: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1751526491/Bookstore/61qdEGIO1DL._AC_UF1000_1000_QL80__tsohb0.jpg",
      authorImage: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1751526568/Bookstore/P_web_y_x_t_thumb_10284_116233_ne3kox.jpg",
      description: "A gripping tale of love and perseverance in difficult times."
    },
    {
      id: 2,
      title: "The Silent Echo",
      author: "Sarah J. Wells",
      publisher: "HarperCollins",
      coverImage: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1751526385/Bookstore/22568155_dq78wl.jpg",
      authorImage: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1751526234/Bookstore/Sarah%20J.%20Wells.png",
      description: "A mystery that will keep you guessing until the last page."
    },
    {
      id: 3,
      title: "Beyond the Horizon",
      author: "Marcus T. Ellington",
      publisher: "Simon & Schuster",
      coverImage: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1751526653/Bookstore/71aTS6mzY0L._UF1000_1000_QL80__s1fsjm.jpg",
      authorImage: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1751526816/Bookstore/20140428__shelby2_kyq9lv.webp",
      description: "An epic journey across uncharted territories."
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full px-4 mx-auto">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="">
            {books.map((book) => (
              <CarouselItem key={book.id} className="basis-full">
                <div className="flex justify-center p-2">
                  <div className="flex flex-col md:flex-row items-center justify-between bg-gray-300 rounded-lg shadow-lg p-8 mx-auto max-w-7xl w-full gap-8">
                    {/* Book Image with Zoom-in Animation */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                      className=""
                    >
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="-rotate-12  w-72 h-96 object-cover rounded shadow-lg"
                      />

                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left max-w-md">
                      <div className="text-sm text-gray-500 mb-2">{book.publisher}</div>
                      <h2 className="text-3xl font-bold mb-2 leading-tight">{book.title}</h2>
                      <p className="text-blue-900 font-medium text-xl mb-4">by {book.author}</p>
                      <p className="text-gray-600 text-base mb-6">{book.description}</p>
                      <div className="flex justify-center md:justify-start">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="px-8 py-4 text-lg bg-gray-600 hover:bg-white hover:text-black">
                            Read More
                          </Button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Author Image with Up-Down Animation */}
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeOut"
                      }}
                      className="flex-shrink-0 hidden lg:block"
                    >
                      <img
                        src={book.authorImage}
                        alt={book.author}
                        className="w-72 h-72 object-cover rounded-full shadow-lg"
                      />
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-4" />
          <CarouselNext className="hidden md:flex right-4" />
        </Carousel>
      </div>
    </section>
  );
};