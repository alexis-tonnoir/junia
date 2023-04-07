import { Annonce } from 'src/annonces/annonce.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pictures')
export class Picture extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string;

  @ManyToOne(() => Annonce, (annonce) => annonce.pictures)
  annonce: Annonce;
}
