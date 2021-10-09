import { Get, Post, Body, Controller } from '@nestjs/common';
import { CreateStudentDto } from './dtos/create-student-dto';

@Controller("students")
export class StudentController {
  @Get("/get")
  getStudent() {
    const school = 'Jackie';
    return school;
  }

  @Post("/new")
  createAge(@Body() body: CreateStudentDto) {
    console.log(body);
  }
}
