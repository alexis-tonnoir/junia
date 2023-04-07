import { Module } from '@nestjs/common';
import { AnnoncesController } from './annonces/annonces.controller';
import { AnnoncesModule } from './annonces/annonces.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnoncesService } from './annonces/annonces.service';
import { typeOrmConfig } from './config/typeorm.config';
import { StatusesModule } from './statuses/statuses.module';
import { PicturesModule } from './pictures/pictures.module';
import { StatusesController } from './statuses/statuses.controller';
import { StatusesService } from './statuses/statuses.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AnnoncesModule,
    StatusesModule,
    PicturesModule,
  ],
  controllers: [AnnoncesController, StatusesController],
  providers: [AnnoncesService, StatusesService],
})
export class AppModule {}
