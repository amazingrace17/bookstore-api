const getBooks = 'SELECT * FROM Books';

const getBooksById = "SELECT * FROM Books where id = $1";

const addBooks = 'INSERT INTO Books (name, club, position, avatar, id) VALUES ($1, $2,$3, $4 , $5 )';
const deleteBooks = "DELETE FROM Books WHERE id = $1 "
const checkNameExists = 'SELECT n FROM Books WHERE n.name = $1';

const updateBooks = 'UPDATE Books Set name = $1 WHERE id = $2'

module.exports = {
    getBooks,
    getBooksById,
   checkNameExists,
   addBooks,
   deleteBooks,
   updateBooks,
};