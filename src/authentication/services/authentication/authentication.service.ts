import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class AuthenticationService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async fiindAll(): Promise<User[]>{
        return await this.userRepository.find();
    }

    async createUser(user : User):Promise<User>{
        return await this.userRepository.save(user);
    }

    async findUserByUserId(user_id: number): Promise<User[]>{
        return await this.userRepository.find({
            where: {user_id :user_id}
        })
    }
}
