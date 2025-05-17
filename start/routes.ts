/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BooksController from '#controllers/books_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
.group(() => {
  router.get('/', [BooksController, 'index'])
  router.post('/', [BooksController, 'store'])
  router.get('/:id', [BooksController, 'show'])
  router.put('/:id', [BooksController, 'update'])
  router.delete('/:id', [BooksController, 'destroy'])
})
.prefix('/books')

import StudentsController from '#controllers/students_controller'

router.group(() => {
  router.get('/', [StudentsController, 'index'])
  router.post('/', [StudentsController, 'store'])
  router.get('/:id', [StudentsController, 'show'])
  router.put('/:id', [StudentsController, 'update'])
  router.delete('/:id', [StudentsController, 'destroy'])
}).prefix('/students')


// router.resource('books', BooksController).apiOnly()