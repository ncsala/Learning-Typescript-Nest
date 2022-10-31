import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  // repo: Repository<User>

  // constructor(repo: Repository<User>) {
  //   this.repo = repo
  // }

  // Recordar que esto es lo mismo que las lineas de arriba
  // Repo sera una instancia de typeorm Repository que lidia con la instancia usuario.
  // O sea ese repositorio manejara las instancias usuario.
  // El InjectRepository se pone pq el sistema de injeccion de dependencia
  // no trabaja bien con "tipos genericos", por eso usamos el decorador
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    // Crea una nueva instancia de usuario con los datos
    // pasados a traves de la request
    const user = this.repo.create({ email, password });

    // Persiste esa entidad usuario en la db
    return this.repo.save(user);
  }

  findAll() {
    const userList = this.repo.find();
    return userList;
  }

  findOne(id: number) {
    const user = this.repo.findOneBy({ id: id });

    return user;
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  // "Partial" le dice que al menos debe recibir un atritubot de la
  // clase (en este caso User)
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // Object.assign(user, attrs);
    // alternativa a object.assign
    const userUpdated = { ...user, ...attrs };

    return this.repo.save(userUpdated);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.repo.remove(user);
  }
}
