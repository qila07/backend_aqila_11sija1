import { schema, rules } from '@adonisjs/validator'

export const createBookSchema = schema.create({
  title: schema.string([
    rules.trim(),
    rules.minLength(3),
    rules.required()
  ]),
  author: schema.string([
    rules.trim(),
    rules.minLength(3),
    rules.required()
  ]),
})

export const messages = {
  'title.required': 'Judul buku wajib diisi',
  'title.minLength': 'Judul minimal 3 karakter',
  'author.required': 'Nama penulis wajib diisi',
  'author.minLength': 'Nama penulis minimal 3 karakter',
}
