
export const getAllBooks = async () => {
    const res = await fetch('https://assignment-8-book-hive.vercel.app/data.json');
    const books = await res.json();
    return  books;
}
export const getCategories = async () => {
    const res = await fetch('https://assignment-8-book-hive.vercel.app/category.json');
    const categories = await res.json();
    return categories;
}

export const reviews =[
  {
    "id": 1,
    "name": "Sakib",
    "image": "https://i.pravatar.cc/150?img=12",
    "review": "This platform is very easy to use. I quickly found the books I needed and borrowing them felt smooth and simple.",
    "stars": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 2,
    "name": "Nabila",
    "image": "https://i.pravatar.cc/150?img=32",
    "review": "I really like the clean interface and fast search system. It saves a lot of time when looking for books.",
    "stars": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 3,
    "name": "Mahmuda",
    "image": "https://i.pravatar.cc/150?img=45",
    "review": "Good collection of books and simple navigation. Everything works without confusion. Great experience overall.",
    "stars": "⭐⭐⭐⭐"
  },
  {
    "id": 4,
    "name": "Yamin",
    "image": "https://i.ibb.co/9mTdtySQ/yamin.jpg",
    "review": "The borrowing system is very convenient. I can easily explore categories and find the books I need.",
    "stars": "⭐⭐⭐⭐"
  }
]



