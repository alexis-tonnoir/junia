import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusesModule } from 'src/statuses/statuses.module';
import { StatusesService } from 'src/statuses/statuses.service';
import { Annonce } from './annonce.entity';
import { AnnoncesController } from './annonces.controller';
import { AnnoncesService } from './annonces.service';

@Module({
  imports: [TypeOrmModule.forFeature([Annonce]), StatusesModule],
  controllers: [AnnoncesController],
  providers: [AnnoncesService, StatusesService],
  exports: [TypeOrmModule],
})
export class AnnoncesModule {}
