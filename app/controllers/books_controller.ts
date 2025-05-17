import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import { createBookSchema, messages } from '#validators/book_validator'

export default class BooksController {
  public async index({ response }: HttpContext) {
    const books = await Book.all()
    return response.ok({
      message: 'Daftar semua buku',
      data: books,
    })
  }

  public async store({ request, response }: HttpContext) {
    const validatedData = await request.validate({
      schema: createBookSchema,
      messages,
    })

    const book = await Book.create(validatedData)
    return response.created({
      message: 'Buku berhasil dibuat',
      data: book,
    })
  }

  public async show({ params, response }: HttpContext) {
    const book = await Book.find(params.id)
    if (!book) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }

    return response.ok({
      message: 'Buku ditemukan',
      data: book,
    })
  }

  public async update({ params, request, response }: HttpContext) {
    const book = await Book.find(params.id)
    if (!book) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }

    const validatedData = await request.validate({
      schema: createBookSchema,
      messages,
    })

    book.merge(validatedData)
    await book.save()

    return response.ok({
      message: 'Buku berhasil diperbarui',
      data: book,
    })
  }

  public async destroy({ params, response }: HttpContext) {
    const book = await Book.find(params.id)
    if (!book) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }

    await book.delete()

    return response.ok({ message: 'Buku berhasil dihapus' })
  }
}