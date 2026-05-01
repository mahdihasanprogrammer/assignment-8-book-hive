
export const getAllBooks =async ()=>{
    const res =await fetch('https://assignment-8-book-hive.vercel.app/data.json');
    const books = await res.json();
    return books;
}

