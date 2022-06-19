import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { SegmentationService } from './segmentation.service';
import { UpdateSegmentationDto } from './dto/update-segmentation.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Observable , of} from 'rxjs';
import { v4 as uuidv4} from 'uuid'
import {diskStorage} from 'multer'
import path = require('path');
import { join } from 'path';

@Controller('segmentation')
export class SegmentationController {
  constructor(private readonly segmentationService: SegmentationService) {}

  @Post('sendTo')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/profileimages',
      filename: (req, file, cb) => {
          const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
          const extension: string = path.parse(file.originalname).ext;

          cb(null, `${filename}${extension}`)
      }
    })
  }))
  uploadFile( @UploadedFile() file, @Body() createSegmentationDto: UpdateSegmentationDto) {
    console.log(file)
    
    return this.segmentationService.create(createSegmentationDto, file);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segmentationService.findOne(+id);
  }

  
  @Get()
  findAll() {
    return this.segmentationService.findAll();
  }

  @Get('data/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
      return of(res.sendFile(join(process.cwd(), 'uploads/profileimages/' + imagename)));
  }


}
