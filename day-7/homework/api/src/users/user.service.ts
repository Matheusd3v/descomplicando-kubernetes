import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async create(name: string) {
    await this.usersRepository.save({
        name
    })
  }

  public async list(): Promise<User[]> {
    return this.usersRepository.find()
  }
}
