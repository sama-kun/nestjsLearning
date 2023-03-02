import { ApiProperty } from "@nestjs/swagger";
import { Table, Model, Column, DataType, BelongsToMany, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

@Table({ tableName: "user_roles", createdAt:false, updatedAt:false})
export class UserRoles extends Model<UserRoles> {

  @Column({
    type: DataType.NUMBER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(()=> Role)
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  roleId: number;

  @ForeignKey(()=> User)
  @Column({ type: DataType.STRING, allowNull: false })
  userId: number;

}