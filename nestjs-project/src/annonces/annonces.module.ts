import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Annonce } from './annonce.entity';
// import { AnnonceRepository } from './annonce.repository';
import { AnnoncesController } from './annonces.controller';
import { AnnoncesService } from './annonces.service';

@Module({
  imports: [TypeOrmModule.forFeature([Annonce])],
  controllers: [AnnoncesController],
  providers: [AnnoncesService],
  exports: [TypeOrmModule],
})
export class AnnoncesModule {}
