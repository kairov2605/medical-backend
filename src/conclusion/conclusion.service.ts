import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConclusionDto } from './dto/create-conclusion.dto';
import { UpdateConclusionDto } from './dto/update-conclusion.dto';
import { ConclusionEntity } from './entities/conclusion.entity';

@Injectable()
export class ConclusionService {
  constructor(
    @InjectRepository(ConclusionEntity)
    private repository: Repository<ConclusionEntity>,
  ) {}

  create(dto: CreateConclusionDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(+id);
  }

  update(id: number, updateConclusionDto: UpdateConclusionDto) {
    return `This action updates a #${id} conclusion`;
  }

  remove(id: number) {
    return `This action removes a #${id} conclusion`;
  }
}
