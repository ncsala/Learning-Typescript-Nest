import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  approved: boolean;
  
  // Toyota, Hyundai, Ford, etc
  @Column()
  make: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @Column()
  price: number;


  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
