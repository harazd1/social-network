import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { PostsService } from './post.service';

@Controller('posts')
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
    async createPost(@Body() body) {
        return this.postsService.createPost(body);
    }

    @Put('/:id')
    async updatePost(@Param('id') id: number, @Body() body) {
        return this.postsService.updatePost(id, body);
    }

    @Delete(':id')
    async deletePost(@Param('id') id: number) {
        return this.postsService.deletePost(id);
    }
}
