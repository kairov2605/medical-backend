import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'    

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique:true
  })
  email: string;

  @Type(() => Date)
  @Column('text')
  date: Date;

  @Column()
  city: string;

  @Column()
  gender: string;

  @Column()
  userRole: string;

  @Column({nullable: true})
  password: string;
}