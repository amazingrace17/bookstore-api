const { Router} = require('express');
const controller = require('./controller');  
const router = Router();

router.get('/', controller.getBooks)
router.get('/:id', controller.getBooksById)
router.post('/', controller.addBooks)
router.delete('/:id', controller.deleteBooks)
 

module.exports  = router;