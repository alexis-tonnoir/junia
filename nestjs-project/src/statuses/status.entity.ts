import { Annonce } from 'src/annonces/annonce.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('statuses')
export class Status extends BaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;

  @OneToMany(() => Annonce, (annonce) => annonce.status)
  annonces: Annonce[];
}
