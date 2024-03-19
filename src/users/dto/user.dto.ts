import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(4, 16, { message: 'Password length should be between 4 and 16 characters' })
  readonly passwordHash: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  readonly isActive?: boolean;

  readonly gender?: string;
}
