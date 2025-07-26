//controller me functionality likenege
//data bse se interaction kar rhe hai esilye async cand all


import Book from "../model/book.model.js";


export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
};


