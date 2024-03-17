import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async getPost(id: number): Promise<Post> {
    return this.postsRepository.findOneBy({id: id});
  }

  async createPost(body) {
    const newPost = this.postsRepository.create(body);
    return this.postsRepository.save(newPost);
  }

  async updatePost(id: number, body): Promise<Post> {
    await this.postsRepository.update(id, body);
    return this.getPost(id);
  }

  async deletePost(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
