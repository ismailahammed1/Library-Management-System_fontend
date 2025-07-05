
export interface Book {
  bookImage: string | undefined;
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;

  
}

export type Borrow = {
  _id: string;
  totalQuantity?: number;
  book: {
    isbn: string;
    _id: string;
    title: string;
    bookImage?: string;
  };

};


