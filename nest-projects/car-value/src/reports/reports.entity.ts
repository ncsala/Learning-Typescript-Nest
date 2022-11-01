import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  // Toyota, Hyundai, Ford, etc
  @Column()
  make: number

  @Column()
  year: number;

  @Column()
  lng: number

  @Column()
  lat: number

  @Column()
  mileage: number
}
