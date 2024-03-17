import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './post.service';
import { PostsController } from './post.controller';
import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}