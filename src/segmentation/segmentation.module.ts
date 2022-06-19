import { Module } from '@nestjs/common';
import { SegmentationService } from './segmentation.service';
import { SegmentationController } from './segmentation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SegmentationEntity } from './entities/segmentation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SegmentationEntity])],
  controllers: [SegmentationController],
  providers: [SegmentationService]
})
export class SegmentationModule {}
