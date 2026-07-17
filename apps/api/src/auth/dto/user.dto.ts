import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: 'Identificador único do usuário' })
  id: string;

  @ApiProperty({ description: 'Nome completo do usuário' })
  name: string;

  @ApiProperty({ description: 'Email do usuário' })
  email: string;
}
