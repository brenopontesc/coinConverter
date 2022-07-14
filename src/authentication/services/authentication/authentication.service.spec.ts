import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../../entities/user.entity';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthenticationService,
        { 
          provide: getRepositoryToken(User),
          useValue: {}
        }
      ],
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
