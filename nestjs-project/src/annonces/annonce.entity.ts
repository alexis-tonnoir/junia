import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('annonces')
export class Annonce extends BaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  price: number;
}
