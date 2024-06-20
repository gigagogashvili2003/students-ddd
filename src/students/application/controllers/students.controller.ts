import { Body, Controller, Delete, Injectable, Param, Post, UsePipes } from '@nestjs/common';
import { CreateStudentUsecase, DeleteStudentUseCase } from '../usecases';
import { ZodValidationPipe } from '@app/common';
import { CreateStudentDto, CreateStudentSchema, StudentWithIdDto, StudentWithIdSchema } from '../schemas';
import { StudentMapper } from '../mappers';
import { StudentResponse } from '../response-dtos';

@Injectable()
@Controller('students')
export class StudentsController {
  public constructor(
    private readonly createStudentUsecase: CreateStudentUsecase,
    private readonly deleteStudentUseCase: DeleteStudentUseCase,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateStudentSchema))
  public create(@Body() createStudentDto: CreateStudentDto): Promise<StudentResponse> {
    return this.createStudentUsecase.execute(StudentMapper.toEntity(createStudentDto));
  }

  @Delete(':id')
  @UsePipes(new ZodValidationPipe(StudentWithIdSchema))
  public delete(@Param() params: StudentWithIdDto): Promise<StudentResponse> {
    return this.deleteStudentUseCase.execute(params.id);
  }
}
