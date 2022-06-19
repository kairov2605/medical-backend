import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesEntity } from './entities/note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotesEntity])],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
