import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('APIs of users')
@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
    ){}

    @ApiOperation({summary:'Create user'})
    @ApiResponse({status:200,type:User})
    @Post()
    async create(@Body() userDto: CreateUserDto){
        const user = this.userService.createUser(userDto);
        return user;
    }

    @ApiOperation({summary:'List of users'})
    @ApiResponse({status:200,type:[User]})
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() {
        return await this.userService.getAllUsers();
    }
}
