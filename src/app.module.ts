import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';


@Module({
    imports:[
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRESS_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [User,Role,UserRoles],
            autoLoadModels: true,
            synchronize: true
        }),
        UsersModule,
        RolesModule,
        AuthModule
    ]
})
export class AppModule{

}