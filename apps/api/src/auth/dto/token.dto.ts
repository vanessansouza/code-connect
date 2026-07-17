import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty({ description: 'JWT de acesso' })
  accessToken: string;
}
