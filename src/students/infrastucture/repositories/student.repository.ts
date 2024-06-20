import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentModel } from '../models';
import { Repository } from 'typeorm';
import { IStudentRepository, IStudentWhereOptions } from '../interfaces';

export const STUDENT_REPOSITORY = Symbol('STUDENT_REPOSITORY');

@Injectable()
export class StudentRepository implements IStudentRepository {
  public constructor(@InjectRepository(StudentModel) private readonly repository: Repository<StudentModel>) {}

  public createOne(model: StudentModel) {
    return this.repository.save(model);
  }

  public deleteOne(model: StudentModel) {
    return this.repository.remove(model);
  }

  public findOne(whereOptions: IStudentWhereOptions) {
    return this.repository.findOne({ where: { ...whereOptions } });
  }
}
