export class StudentResponse {
  public constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly age: number,
    public readonly dateOfBirth: Date,
  ) {}
}
