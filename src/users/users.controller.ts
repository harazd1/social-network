import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { UsersService } from './users.service';

@Controller('cadet')
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


}