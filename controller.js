const pool = require('./database.js');
const queries = require('./queries')




// get Books
const getBooks = (req,res) => {
  pool.query(queries.getBooks, (error,results) => {
      if (error) throw error;
      res.status(200).json(results.rows)
  }) 

  
}

// request for books by id
const getBooksById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getBooksById,[id], (error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
        console.table(results.rows)
    }) 
  
  }
const updateBook = (req,res) =>{
  const id = parseInt(req.params.id);
  const {name} = req.body;
  
  pool.query(queries.getBooksById, [id],(error, results) => {
    const noBookFound = !results.rows.length;
    if (noBookFound){
      res.send('Player does not exist in the database');
    }
  })

  pool.query(queries.updateBooks,[name], (error,results)=>{
    if (error) throw error;
    res.status(200),send('player updated successfully')
  })
}
// adding Books
  const addBooks = (req,res) =>{
     console.log(req.body);
  const {name, club, position, avatar, id } = req.body
  pool.query(queries.checkNameExists,[name],( error , results)=> {
    if (results.rows.length) 
       res.status(201).send('player EXIST')
     
   })
    pool.query(queries.addBooks,[name, club, position, avatar, id],( error , results)=> {
     if (error) throw error;
        res.status(201).send('player added succesfully')
      
    })
  }

  // removing Books
  const deleteBooks = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteBooks, [id],(error, results) => {
      const noPlayerFound = !results.rows.length;
      if (noPlayerFound){
        res.send('Player does not exist in the database');
      }
  
    pool.query(queries.deleteBooks, [id],(error, results) => {
      
      if (error)throw error;
     res.status(200).send('Player removed successfully')
    })
    })
  }
// adding avatars
//   app.post('/player/avatar', upload.single('avatar'), (req,res)=>{
//     console.log('image uploading...');
//     console.log(req.file)
//     res.send('success')
// })

module.exports = {
getBooks,
getBooksById,
addBooks,
deleteBooks,
updateBooks,
};