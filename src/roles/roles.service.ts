import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role){}
    
    async createRole(dto: CreateRoleDto){
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByRole(value: string){
        const entity = await this.roleRepository.findOne({
            where: {
                value
            }
        })

        return entity;
    }

}
