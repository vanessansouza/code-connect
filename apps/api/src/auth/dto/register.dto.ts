import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: 'Nome completo do usuário' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Email do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Senha do usuário', minLength: 6 })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
