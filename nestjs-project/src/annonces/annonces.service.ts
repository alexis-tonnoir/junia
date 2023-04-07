import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusesService } from 'src/statuses/statuses.service';
import { Repository } from 'typeorm';
import { Annonce } from './annonce.entity';
import { CreateAnnonceDto } from './dto/create-annonce.dto';

@Injectable()
export class AnnoncesService {
  constructor(
    @InjectRepository(Annonce)
    private annoncesRepository: Repository<Annonce>,
    private statusesService: StatusesService,
  ) {}

  async getAll() {
    const res = await this.annoncesRepository.find();
    console.log('res is :', res);
    return res;
  }

  async getById(id: string): Promise<Annonce> {
    const res = await this.annoncesRepository.findOneBy({ id: id });
    if (!res) {
      throw new NotFoundException(`Annonce with id ${id} could not be found`);
    }
    return res;
  }

  async createAnnonce(
    id: string,
    title: string,
    price: number,
  ): Promise<Annonce> {
    const annonce = new Annonce();
    annonce.id = id;
    annonce.title = title;
    annonce.price = price;
    await annonce.save();

    return annonce;
  }

  async createAnnonceDto(createAnnonceDto: CreateAnnonceDto): Promise<Annonce> {
    const { id, title, price, statusId } = createAnnonceDto;

    const annonce = new Annonce();
    annonce.id = id;
    annonce.title = title;
    annonce.price = price;

    await this.statusesService.getById(statusId).then((status) => annonce.status = status);
    await annonce.save();

    return annonce;
  }
}
