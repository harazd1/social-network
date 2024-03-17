import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.usersRepository.find();
  }

  getUser(id) {
    return this.usersRepository.findOneBy({id: id});
  }

  createUser(body) {
    const newUser = this.usersRepository.create(body);
    return this.usersRepository.save(newUser);
  }

  updateUser(id: number, body) {
    return this.usersRepository.update({ id }, body );
  }

  deleteUser(id: number) {
    return this.usersRepository.delete({ id });
  }
}