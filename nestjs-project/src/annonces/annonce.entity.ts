import { Picture } from 'src/pictures/picture.entity';
import { Status } from 'src/statuses/status.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity('annonces')
export class Annonce extends BaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  price: number;

  @OneToMany(() => Picture, (picture) => picture.annonce)
  pictures: Picture[];
  @ManyToOne(() => Status, (status) => status.annonces, {eager: true})
  status: Status;
}
