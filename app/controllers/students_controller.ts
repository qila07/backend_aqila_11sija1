// app/controllers/students_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import { createStudentSchema, messages } from '#validators/student_validator'

export default class StudentsController {
  public async store({ request, response }: HttpContext) {
    const payload = await request.validate({
      schema: createStudentSchema,
      messages,
    })

    const student = await Student.create(payload)

    return response.created({
      message: 'Siswa berhasil ditambahkan',
      data: student,
    })
  }

  public async index({ response }: HttpContext) {
    const students = await Student.all()
    return response.ok(students)
  }

  public async show({ params, response }: HttpContext) {
    const student = await Student.find(params.id)
    if (!student) {
      return response.notFound({ message: 'Siswa tidak ditemukan' })
    }
    return response.ok(student)
  }

  public async update({ params, request, response }: HttpContext) {
    const student = await Student.find(params.id)
    if (!student) {
      return response.notFound({ message: 'Siswa tidak ditemukan' })
    }

    const payload = await request.validate({
      schema: createStudentSchema,
      messages,
    })

    student.merge(payload)
    await student.save()

    return response.ok({
      message: 'Data siswa berhasil diperbarui',
      data: student,
    })
  }

  public async destroy({ params, response }: HttpContext) {
    const student = await Student.find(params.id)
    if (!student) {
      return response.notFound({ message: 'Siswa tidak ditemukan' })
    }

    await student.delete()
    return response.ok({ message: 'Siswa berhasil dihapus' })
  }
}
