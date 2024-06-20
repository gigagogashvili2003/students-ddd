import { StudentModel } from 'src/students/infrastucture/models';
import { IStudentWhereOptions } from './student-where-options.interface';

export interface IStudentRepository {
  createOne(model: StudentModel): Promise<StudentModel>;
  deleteOne(model: StudentModel): Promise<StudentModel>;
  findOne(whereOptions: IStudentWhereOptions): Promise<StudentModel>;
}
