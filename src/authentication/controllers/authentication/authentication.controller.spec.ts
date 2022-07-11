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
      providers:[AuthenticationService, TiendanubeApiService]
    }).useMocker((token)=>{
      if(token === TiendanubeApiService){
        return {
          authenticateUserInTiendanubeApi: jest.fn().mockResolvedValue(
            {
              access_token: '0000001',
              token_type: "bearer",
              scope:"read_products",
              user_id:"1"
            })
        }
      }
      
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
    authenticationService = module.get<AuthenticationService>(AuthenticationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should authorize and save user',async () =>{
    controller.authenticate('123456789')
    let allUsersInDatabase = await authenticationService.fiindAll();
    expect(allUsersInDatabase.length).toBe(1)
  });
});
