import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConclusionEntity } from 'src/conclusion/entities/conclusion.entity';
import { Repository } from 'typeorm';
import { CreateNotesDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesEntity } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NotesEntity)
    private repository: Repository<NotesEntity>,
  ) {}

  create(dto: CreateNotesDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(+id);
  }

}
