import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { TiendanubeApiService } from '../../../tiendanube/services/tiendanube-api/tiendanube-api.service';
import { AuthenticationController } from './authentication.controller';

describe('AuthenticationController', () => {
  let controller: AuthenticationController;
  let authenticationService: AuthenticationService
  let tiendaNubeApiService: TiendanubeApiService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
      providers:[
        {
          provide: AuthenticationService,
          useValue: jest.fn()
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
