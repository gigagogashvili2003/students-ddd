import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class StudentModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  age: number;

  @Column({ nullable: false })
  dateOfBirth: Date;
}
