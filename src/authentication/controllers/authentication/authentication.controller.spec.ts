import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { TiendanubeApiService } from '../../../tiendanube/services/tiendanube-api/tiendanube-api.service';
import { AuthenticationController } from './authentication.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';

describe('AuthenticationController', () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
      providers:[
        AuthenticationService,
        { 
          provide: getRepositoryToken(User), 
          useValue: {} 
        },
        {
          provide: TiendanubeApiService,
          useValue: jest.fn()
        }
      ]
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
