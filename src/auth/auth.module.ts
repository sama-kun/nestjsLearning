import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    forwardRef(()=> UsersModule),
    JwtModule.register({
      secret: String(process.env.JWT_SECRET_KEY),
      signOptions:{
        expiresIn: String(process.env.JWT_TOKEN_EXPIRES)
      }
    })
  ],
  exports:[
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
