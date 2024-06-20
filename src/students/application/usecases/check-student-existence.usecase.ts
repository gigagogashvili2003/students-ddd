import { Inject, Injectable } from '@nestjs/common';
import { IStudentRepository } from 'src/students/infrastucture/interfaces';
import { STUDENT_REPOSITORY } from 'src/students/infrastucture/repositories';

@Injectable()
export class CheckStudentExistenceUsecase {
  public constructor(@Inject(STUDENT_REPOSITORY) private readonly studentRepository: IStudentRepository) {}

  public execute(whereOptions: { email?: string; id?: string }) {
    return this.studentRepository.findOne(whereOptions);
  }
}
