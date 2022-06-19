import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'    

@Entity('notes')
export class NotesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  patientLastName: string;

  @Column()
  description: string;

  @Type(() => Date)
  @Column('date')
  dateSend: Date;

}