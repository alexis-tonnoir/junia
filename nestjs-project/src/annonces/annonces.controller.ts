import { Controller, Get } from '@nestjs/common';
import { AnnoncesService } from './annonces.service';

@Controller('annonces')
export class AnnoncesController {
  constructor(private annoncesService: AnnoncesService) {}

  @Get()
  getAllAnnonces() {
    console.log('get all annonces');
    return this.annoncesService.getAll();
  }
}
