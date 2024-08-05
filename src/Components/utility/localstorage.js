
const getStoredReadbooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const savedReadBooks = bookId => {
    const storedReadBooks =  getStoredReadbooks ();
    const exists = storedReadBooks.find(readBookId => readBookId === bookId );
    if(!exists){
        storedReadBooks.push(bookId);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
}

export {getStoredReadbooks, savedReadBooks};