import { Module } from '@nestjs/common';
import { AnnoncesController } from './annonces/annonces.controller';
import { AnnoncesModule } from './annonces/annonces.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnoncesService } from './annonces/annonces.service';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AnnoncesModule],
  controllers: [AnnoncesController],
  providers: [AnnoncesService],
})
export class AppModule {}
