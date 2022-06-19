import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSegmentationDto } from './dto/update-segmentation.dto';
import { SegmentationEntity } from './entities/segmentation.entity';

@Injectable()
export class SegmentationService {

  constructor(
    @InjectRepository(SegmentationEntity)
    private repository: Repository<SegmentationEntity>,
  ) {}

  create(dto: UpdateSegmentationDto, file) {
    console.log(dto)
    dto.image = file.filename
    return this.repository.save(dto);
  }
  
  findAll() {
    return this.repository.find();
  }
  findOne(id: number) {
    return this.repository.findOne(+id);
  }

  update(id: number, updateSegmentationDto: UpdateSegmentationDto) {
    return `This action updates a #${id} segmentation`;
  }

  remove(id: number) {
    return `This action removes a #${id} segmentation`;
  }
}
