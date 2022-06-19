import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'    

@Entity('segmentation')
export class SegmentationEntity {
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

  @Column({nullable: true})
  image: string;
}