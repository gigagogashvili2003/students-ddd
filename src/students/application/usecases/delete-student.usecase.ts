import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IStudentRepository } from 'src/students/infrastucture/interfaces';
import { STUDENT_REPOSITORY } from 'src/students/infrastucture/repositories';
import { StudentMapper } from '../mappers';
import { CheckStudentExistenceUsecase } from './check-student-existence.usecase';

@Injectable()
export class DeleteStudentUseCase {
  public constructor(
    @Inject(STUDENT_REPOSITORY) private readonly studentRepository: IStudentRepository,
    private readonly checkStudentExistenceUsecase: CheckStudentExistenceUsecase,
  ) {}

  public async execute(id: string) {
    const studentExists = await this.checkStudentExistenceUsecase.execute({ id });
    if (!studentExists) {
      throw new NotFoundException(`Student with uuid: ${id} not found!`);
    }

    const deletedStudent = await this.studentRepository.deleteOne(studentExists);
    return StudentMapper.toResponse(deletedStudent);
  }
}
