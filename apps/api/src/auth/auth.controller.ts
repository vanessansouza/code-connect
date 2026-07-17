import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { TokenDto } from './dto/token.dto';
import { UserDto } from './dto/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() payload: RegisterDto): Promise<UserDto> {
    return this.authService.register(payload);
  }

  @Post('login')
  async login(@Body() payload: LoginDto): Promise<TokenDto> {
    return this.authService.login(payload);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async me(@Req() request: any): Promise<UserDto> {
    const userId: string = request.user.sub;
    const user = await this.authService.findById(userId);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}
