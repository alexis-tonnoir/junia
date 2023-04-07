import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Annonce } from 'src/annonces/annonce.entity';
import { Picture } from 'src/pictures/picture.entity';
import { Status } from 'src/statuses/status.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'junia_user',
  password: 'junia_user',
  database: 'junia',
  entities: [Annonce, Picture, Status],
  synchronize: true,
};
