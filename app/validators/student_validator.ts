// app/validators/student_validator.ts
import { schema, rules } from '@adonisjs/validator'

export const createStudentSchema = schema.create({
  name: schema.string({}, [rules.minLength(3)]),
  email: schema.string({}, [rules.email()]),
  age: schema.number(),
  class: schema.string({}, [rules.minLength(3)]),
})

export const messages = {
  'name.required': 'Nama wajib diisi',
  'name.minLength': 'Nama minimal 3 karakter',
  'email.required': 'Email wajib diisi',
  'email.email': 'Format email tidak valid',
  'age.required': 'Umur wajib diisi',
  'class.required': 'Kelas wajib diisi',
  'class.minLength': 'Nama kelas minimal 3 karakter',
}
