import * as z from 'zod';

export const CreateStudentSchema = z.object({
  email: z.string().min(1).max(30),
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
  age: z.number().min(18).max(99),
  dateOfBirth: z.coerce.date().refine((date) => !isNaN(date.getTime()), {
    message: 'Invalid date format, expected ISO 8601 format (YYYY-MM-DD)',
  }),
});

export const StudentWithIdSchema = z.object({
  id: z.string().uuid(),
});

export type CreateStudentDto = z.infer<typeof CreateStudentSchema>;
export type StudentWithIdDto = z.infer<typeof StudentWithIdSchema>;
