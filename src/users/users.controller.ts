import { Controller, Delete, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

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
    createUser(@Body() userDto: CreateUserDto ){
        return this.userService.createUser(userDto);

    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() userDto: CreateUserDto) {
        return this.userService.updateUser(id, userDto)
    }


}