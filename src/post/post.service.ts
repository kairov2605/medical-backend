import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}


  create(dto: CreatePostDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const find = await this.repository.findOne(+id)

    if(!find) {
      throw new NotFoundException("Статья не найдена!")
    }

    return this.repository.findOne(id);
  }

  update(id: number, dto: UpdatePostDto) {
    return this.repository.update(id,dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
