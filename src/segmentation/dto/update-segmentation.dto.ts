import { PartialType } from '@nestjs/mapped-types';
import { CreateSegmentationDto } from './create-segmentation.dto';

export class UpdateSegmentationDto extends PartialType(CreateSegmentationDto) {}
