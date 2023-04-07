import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Annonce } from './annonce.model';
import { AnnoncesService } from './annonces.service';
import { CreateAnnonceDto } from './dto/create-annonce.dto';

@Controller('annonces')
export class AnnoncesController {
  constructor(private annoncesService: AnnoncesService) {}

  @Get()
  getAllAnnonces() {
    console.log('get all annonces');
    return this.annoncesService.getAll();
  }

  @Get('/:id')
  getAnnonceById(@Param('id') id: string): Promise<Annonce> {
    return this.annoncesService.getById(id);
  }

  @Post()
  createAnnonce(
    @Body('id') id: string,
    @Body('title') title: string,
    @Body('price') price: number,
  ): Promise<Annonce> {
    return this.annoncesService.createAnnonce(id, title, price);
  }

  @Post('dto')
  createAnnonceDto(
    @Body() createAnnonceDto: CreateAnnonceDto,
  ): Promise<Annonce> {
    return this.annoncesService.createAnnonceDto(createAnnonceDto);
  }

  @Delete()
  deleteAnnonce() {
    return 'deleted';
  }

  @Patch()
  updateAnnonce() {
    return 'updated';
  }
}
