import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { Status } from './status.entity';
import { StatusesService } from './statuses.service';

@Controller('statuses')
export class StatusesController {
  constructor(private statusesService: StatusesService) {}

  @Get()
  getAllStatuses() {
    return this.statusesService.getAll();
  }

  @Post()
  createAnnonceDto(@Body() createStatusDto: CreateStatusDto): Promise<Status> {
    return this.statusesService.createStatus(createStatusDto);
  }
}
