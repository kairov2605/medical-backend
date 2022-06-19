import { Module } from '@nestjs/common';
import { ConclusionService } from './conclusion.service';
import { ConclusionController } from './conclusion.controller';
import { ConclusionEntity } from './entities/conclusion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ConclusionEntity])],
  controllers: [ConclusionController],
  providers: [ConclusionService]
})
export class ConclusionModule {}
