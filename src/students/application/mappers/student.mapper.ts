import { Student } from 'src/students/domain/entities';
import { CreateStudentDto } from '../schemas';
import { StudentModel } from 'src/students/infrastucture/models';
import { StudentResponse } from '../response-dtos';

export class StudentMapper {
  public static toEntity(dto: CreateStudentDto) {
    return new Student(dto.email, dto.firstName, dto.lastName, dto.age, dto.dateOfBirth);
  }

  public static toModel(entity: Student) {
    const model = new StudentModel();
    model.email = entity.email;
    model.firstName = entity.firstName;
    model.lastName = entity.lastName;
    model.age = entity.age;
    model.dateOfBirth = entity.dateOfBirth;
    return model;
  }

  public static toResponse(model: StudentModel) {
    return new StudentResponse(model.id, model.email, model.firstName, model.lastName, model.age, model.dateOfBirth);
  }
}
