import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor (private userService: UsersService){}

    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.userService.getUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
     }

    @Post()
    createCadet(@Body() body){
        return this.userService.createUser(body)
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() body) {
        return this.userService.updateUser(id, body)
    }


}