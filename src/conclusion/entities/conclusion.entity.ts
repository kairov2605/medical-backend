import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'    

@Entity('conclusion')
export class ConclusionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doctorName: string;

  @Column()
  doctorLastName: string;

  @Column()
  description: string;

  @Type(() => Date)
  @Column('date')
  dateSend: Date;

}