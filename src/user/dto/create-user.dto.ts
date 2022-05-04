import { IsEmail , Length} from 'class-validator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateUserDto {
    @Length(3)
    firstName: string;

    @Length(3)
    lastName: string;

    @IsEmail()
    email:string

    @Length(6,32)
    password?: string;

    @CreateDateColumn({type:'timestamp'})
    createdAt: Date;
  
    @UpdateDateColumn({type:'timestamp'})
    updatedAt: Date;

}
