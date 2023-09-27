import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  name: string;
  // posts Post[]
}
