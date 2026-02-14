import mongoose from "mongoose";
import dotenv from "dotenv";
import { Book } from "./models/Book";

dotenv.config();

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB Connected ✅");

    // Clear existing books
    await Book.deleteMany();
    console.log("Old books deleted ✅");

    const books = [
      {
        name: "Atomic Habits",
        description: "Build good habits and break bad ones.",
        author: "James Clear",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
        quantity: 10,
      },
      {
        name: "The Power of Now",
        description: "Guide to spiritual enlightenment.",
        author: "Eckhart Tolle",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
        quantity: 8,
      },
      {
        name: "Deep Work",
        description: "Rules for focused success.",
        author: "Cal Newport",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
        quantity: 6,
      },
      {
        name: "Rich Dad Poor Dad",
        description: "Financial knowledge and mindset.",
        author: "Robert Kiyosaki",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
        quantity: 12,
      },
      {
        name: "Think and Grow Rich",
        description: "Classic wealth-building book.",
        author: "Napoleon Hill",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
        quantity: 7,
      },
      {
        name: "The 7 Habits of Highly Effective People",
        description: "Personal development classic.",
        author: "Stephen R. Covey",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
        quantity: 9,
      },
      {
        name: "Zero to One",
        description: "Startup and innovation mindset.",
        author: "Peter Thiel",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
        quantity: 5,
      },
      {
        name: "The Alchemist",
        description: "Philosophical fiction about destiny.",
        author: "Paulo Coelho",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
        quantity: 10,
      },
      {
        name: "Sapiens",
        description: "History of humankind.",
        author: "Yuval Noah Harari",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
        quantity: 6,
      },
      {
        name: "Ikigai",
        description: "Japanese secret to long life.",
        author: "Hector Garcia",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg",
        quantity: 11,
      },
      {
        name: "Man’s Search for Meaning",
        description: "Finding purpose in life.",
        author: "Viktor Frankl",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71YdS8B3H4L.jpg",
        quantity: 8,
      },
      {
        name: "The Psychology of Money",
        description: "Behavior and money lessons.",
        author: "Morgan Housel",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
        quantity: 9,
      },
      {
        name: "The Lean Startup",
        description: "Startup growth strategy.",
        author: "Eric Ries",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
        quantity: 7,
      },
      {
        name: "Start With Why",
        description: "Leadership inspiration.",
        author: "Simon Sinek",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71NB0uMCl0L.jpg",
        quantity: 6,
      },
      {
        name: "Can’t Hurt Me",
        description: "Discipline and mental toughness.",
        author: "David Goggins",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
        quantity: 10,
      },
    ];

    await Book.insertMany(books);

    console.log("Books Seeded Successfully 🎉");
    process.exit();
  } catch (error) {
    console.error("Seeding Error ❌", error);
    process.exit(1);
  }
};

seedBooks();
