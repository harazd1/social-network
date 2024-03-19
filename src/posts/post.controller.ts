import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/post.dto';

@Controller('post')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getAllPosts() {
        return this.postsService.getAllPosts();
    }

    @Get(':id')
    async getPost(@Param('id') id: number) {
        return this.postsService.getPost(id);
    }

    @Post()
    async createPost(@Body() postDto: CreatePostDto) {
        return this.postsService.createPost(postDto);
    }

    @Put('/:id')
    async updatePost(@Param('id') id: number, @Body() postDto: CreatePostDto) {
        return this.postsService.updatePost(id, postDto);
    }

    @Delete(':id')
    async deletePost(@Param('id') id: number) {
        return this.postsService.deletePost(id);
    }
}
