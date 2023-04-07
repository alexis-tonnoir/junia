import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { Status } from './status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Status])],
  providers: [StatusesService],
  controllers: [StatusesController],
  exports: [TypeOrmModule],
})
export class StatusesModule {}
