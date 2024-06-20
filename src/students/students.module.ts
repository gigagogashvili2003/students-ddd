import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModel } from './infrastucture/models';
import { StudentsController } from './application/controllers';
import { CheckStudentExistenceUsecase, CreateStudentUsecase, DeleteStudentUseCase } from './application/usecases';
import { STUDENT_REPOSITORY, StudentRepository } from './infrastucture/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([StudentModel])],
  providers: [
    CreateStudentUsecase,
    CheckStudentExistenceUsecase,
    DeleteStudentUseCase,
    { provide: STUDENT_REPOSITORY, useClass: StudentRepository },
  ],
  controllers: [StudentsController],
})
export class StudentsModule {}
