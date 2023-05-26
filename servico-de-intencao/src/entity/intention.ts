import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Intention {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  name: string = '';

  @Column('json')
  products: string = '';

  @Column()
  address: string = '';
}

