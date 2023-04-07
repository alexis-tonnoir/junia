import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStatusDto } from './dto/create-status.dto';
import { Status } from './status.entity';

@Injectable()
export class StatusesService {
  constructor(
    @InjectRepository(Status)
    private statusesRepository: Repository<Status>,
  ) {}

  async getAll() {
    const res = await this.statusesRepository.find();
    return res;
  }

  async getById(id: string): Promise<Status> {
    const res = await this.statusesRepository.findOneBy({ id: id });
    if (!res) {
      throw new NotFoundException(`Status with id ${id} could not be found`);
    }
    return res;
  }

  async createStatus(createStatusDto: CreateStatusDto): Promise<Status> {
    const { id, name } = createStatusDto;

    const status = new Status();
    status.id = id;
    status.name = name;
    await status.save();

    return status;
  }
}
