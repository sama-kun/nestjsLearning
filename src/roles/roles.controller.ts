import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private service: RolesService){}

    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.service.createRole(dto);
    }

    @Get('/:value')
    getRoleByValue(@Param('value')value: string){
        return this.service.getRoleByRole(value);
    }
}
