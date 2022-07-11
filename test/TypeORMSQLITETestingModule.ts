import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/authentication/entities/user.entity';

export const TypeOrmSQLITETestingModule = () => [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: ':memory:',
      dropSchema: true,
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ];