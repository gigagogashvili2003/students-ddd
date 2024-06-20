import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Student } from 'src/students/domain/entities';
import { IStudentRepository } from 'src/students/infrastucture/interfaces';
import { STUDENT_REPOSITORY } from 'src/students/infrastucture/repositories';
import { StudentMapper } from '../mappers';
import { CheckStudentExistenceUsecase } from './check-student-existence.usecase';

@Injectable()
export class CreateStudentUsecase {
  public constructor(
    @Inject(STUDENT_REPOSITORY) private readonly studentRepository: IStudentRepository,
    private readonly checkStudentExistenceUsecase: CheckStudentExistenceUsecase,
  ) {}

  public async execute(entity: Student) {
    const studentExists = await this.checkStudentExistenceUsecase.execute({ email: entity.email });
    if (studentExists) {
      throw new ConflictException(`Student with email: ${entity.email} already exists!`);
    }

    const newStudent = await this.studentRepository.createOne(StudentMapper.toModel(entity));
    return StudentMapper.toResponse(newStudent);
  }
}
