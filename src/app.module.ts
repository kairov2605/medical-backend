import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/entities/post.entity';
import { CommentModule } from './comment/comment.module';
import { CommentEntity } from './comment/entities/comment.entity';
import { AuthModule } from './auth/auth.module';
import { SegmentationModule } from './segmentation/segmentation.module';
import { SegmentationEntity } from './segmentation/entities/segmentation.entity';
import { ConclusionModule } from './conclusion/conclusion.module';
import { ConclusionEntity } from './conclusion/entities/conclusion.entity';
import { NotesModule } from './notes/notes.module';
import { NotesEntity } from './notes/entities/note.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_URI,
    port: 5432,
    username: 'postgres',
    password: process.env.DB_NAME,
    database: process.env.DB_PASSWORD,
    entities: [UserEntity, PostEntity, CommentEntity, SegmentationEntity, ConclusionEntity, NotesEntity],
    synchronize: true,
  }), UserModule, PostModule, CommentModule, AuthModule, SegmentationModule, ConclusionModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
